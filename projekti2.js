function arvauspeli() {
    var arvappa = document.getElementById('arvappa').value;
    if (arvaustenLukumaara >= 3) {
        arvatutNumerot.push(arvappa);
        document.getElementById('btn').hidden = true;
        m2.innerHTML = "Arvauksen lukum\u00E4\u00E4r\u00E4: " + arvaustenLukumaara;
        m3.innerHTML = "Arvetut numerot: " + arvatutNumerot;
    }
    else {
        if (arvappa < 1 || arvappa > 10) {
            alert("Anna numero 1 ja 10 v\u00E4liss\u00E4")
        }
        else {
            arvatutNumerot.push(arvappa);
        }
        if (arvappa < arvattava) {
            m1.innerHTML = "Arvaus on liian pieni";
        }
        else if (arvappa > arvattava) {
            m1.innerHTML = "Arvaus on liian suuri";
        }
        else {
            m1.innerHTML = "Oikein!";
        }
        m2.innerHTML = "Arvausten lukum\u00E4\u00E4r\u00E4: " + arvaustenLukumaara;
        m3.innerHTML = "Arvetut numerot ovat: " + arvatutNumerot;
    }
    arvaustenLukumaara++;
}
var rivi1 = document.getElementById('m1');
var rivi2 = document.getElementById('m2');
var rivi3 = document.getElementById('m3');
var arvattava = Math.floor(Math.random() * 10) + 1;
var arvaustenLukumaara = 1;
let arvatutNumerot = [];
var voitot = 0;
var tappiot = 0;
