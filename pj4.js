document.addEventListener("DOMContentLoaded", function () {
    const tehtavaInput = document.getElementById("tehtava");
    const lisaaButton = document.getElementById("lisaaButton");
    const tehtavalista = document.getElementById("tehtavalista");

    function syottopituus() {
        return tehtavaInput.value.length;
    }

    function listanPituus() {
        return tehtavalista.children.length;
    }

    function teeListaElementti() {
        const li = document.createElement("li");
        const poistaButton = document.createElement("button");

        li.appendChild(document.createTextNode(tehtavaInput.value));
        li.appendChild(poistaButton);

        poistaButton.appendChild(document.createTextNode("X"));
        poistaButton.classList.add("deleteButton");

        poistaButton.addEventListener("click", function () {
            tehtavalista.removeChild(li);
        });

        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        tehtavalista.appendChild(li);
        tehtavaInput.value = "";
    }

    function lisaaListallePainalluksenJalkeen() {
        if (syottopituus() > 0) {
            teeListaElementti();
        }
    }

    function lisaaListaEnterinJalkeen(event) {
        if (syottopituus() > 0 && event.which == 13) {
            teeListaElementti();
        }
    }

    lisaaButton.addEventListener("click", lisaaListallePainalluksenJalkeen);
    tehtavaInput.addEventListener("keypress", lisaaListaEnterinJalkeen);
});
