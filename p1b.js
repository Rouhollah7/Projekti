function lomakke() {
          
            var nimi = document.getElementById('nimi').value;
    if (nimi.length < 3) {
        alert("Nimen pituuden tulee olla v�hint��n 3 merkki�.");
    return false;
            }

    var sahkoposti = document.getElementById('email').value;
    if (!emailIsValid(sahkoposti)) {
        alert("Anna oikea s�hk�postiosoite");
    return false;
            }

    return true; 
        }
