const todayNamesElement = document.getElementById('todayNames');
const tomorrowNamesElement = document.getElementById('tomorrowNames');
const yesterdayNamesElement = document.getElementById('yesterdayNames');
const customDateNamesElement = document.getElementById('customDateNames');
const nameSearchInput = document.getElementById('nameSearchInput');
const nameSearchResult = document.getElementById('nameSearchResult');
const dateInput = document.getElementById('dateInput');

async function getNamedays() {
    const date = dateInput.value;
    const apiUrl = `https://nameday.abalin.net/api/v1/${date}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayNamedays(data, customDateNamesElement);
    } catch (error) {
        console.error('Virhe nimip‰ivien hakemisessa:', error);
    }
}

async function searchByName() {
    const name = nameSearchInput.value;
    const apiUrl = `https://nameday.abalin.net/api/v1/namedays?name=${name}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayNamedays(data, nameSearchResult);
    } catch (error) {
        console.error('Virhe nimip‰iv‰n hakemisessa nimell‰:', error);
    }
}

function displayNamedays(data, element) {
    element.innerHTML = '';

    if (data && data.data) {
        const namedays = data.data.namedays;

        if (namedays) {
            namedays.forEach(name => {
                const listItem = document.createElement('li');
                listItem.textContent = name;
                element.appendChild(listItem);
            });
        } else {
            element.textContent = 'Ei nimip‰ivi‰ t‰ll‰ p‰iv‰m‰‰r‰ll‰.';
        }
    } else {
        element.textContent = 'Virhe haettaessa nimip‰ivi‰.';
    }
}

getNamedays(); 
getNamedays('tomorrow'); 
getNamedays('yesterday'); 
