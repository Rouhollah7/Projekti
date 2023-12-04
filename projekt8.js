const pages = document.querySelectorAll('.page');
const lists = document.querySelectorAll('.list');
let draggedItem = null;

for (let i = 0; i < lists.length; i++) {
    const list = lists[i];

    list.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    });

    list.addEventListener('dragenter', function (e) {
        e.preventDefault();
    });

    list.addEventListener('dragleave', function (e) {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    });

    list.addEventListener('drop', function (e) {
        e.preventDefault();
        if (draggedItem) {
            const originalList = draggedItem.parentNode;
            this.appendChild(draggedItem);
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            draggedItem = null;

            originalList.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }
    });
}

function addNewTask() {
    const newList = lists[0];
    const newTaskInput = document.getElementById('newTaskInput');

    if (newTaskInput.value.trim() !== '') {
        const newTask = document.createElement('div');
        newTask.classList.add('list-item');
        newTask.draggable = true;
        newTask.textContent = newTaskInput.value;

        newList.appendChild(newTask);

        newTask.addEventListener('dragstart', function (e) {
            draggedItem = e.target;
            setTimeout(function () {
                draggedItem.style.display = 'none';
            }, 0);
        });

        newTask.addEventListener('dragend', function () {
            setTimeout(function () {
                draggedItem.style.display = 'block';
            }, 0);
        });

        newTaskInput.value = '';
    }
}

addNewTask(0, 'Initial Task 1');
addNewTask(0, 'Initial Task 2');
addNewTask(0, 'Initial Task 3');
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
