function tarkistaLomake() {
    var nimi = document.getElementById('nimi').value;
    var email = document.getElementById('email').value;
    var ika = document.getElementById('ika').value;

    if (nimi.length < 2) {
        alert('Anna vähintään kahden merkin pituinen nimi.');
        return false;
    }

    if (!emailIsValid(email)) {
        alert('Anna oikea sähköpostiosoite.');
        return false;
    }

    if (ika < 18 || ika > 99) {
        alert('Anna ikäsi 18-99 välillä.');
        return false;
    }

    return true;
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
