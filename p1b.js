function lomakke() {
          
            var nimi = document.getElementById('nimi').value;
    if (nimi.length < 3) {
        alert("Nimen pituuden tulee olla vähintään 3 merkkiä.");
    return false;
            }

    var sahkoposti = document.getElementById('email').value;
    if (!emailIsValid(sahkoposti)) {
        alert("Anna oikea sähköpostiosoite");
    return false;
            }

    return true; 
        }
