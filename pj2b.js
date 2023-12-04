var yhteensa = 5;
var pisteet = 0;

function lahtVastaukset() {
    var huom = 0;

    for (var i = 1; i <= yhteensa; i++) {
        var k = document.forms["kysely2"]["K" + i];
        if (k.value === null || k.value === '') {
            alert('Et vastannut kysymykseen numero: ' + i);
            huom = 1;
        }
    }

    if (huom === 1) return false;

    var vastaukset = ["b", "a", "d", "b", "d"];

    for (var i = 1; i <= yhteensa; i++) {
        var k = document.forms["kysely2"]["K" + i];
        if (k.value === vastaukset[i - 1]) {
            pisteet++;
        }
    }

    var tulokset = document.getElementById('tulokset');
    alert('Sait ' + pisteet + ' pistett�, kun maksimi pistem��r� oli ' + yhteensa);
    tulokset.innerHTML = '<h3>Sait <span>' + pisteet + '</span> pistett�, kun maksimi pistem��r� oli <span>' + yhteensa + '</span></h3>';
    return false;
}
