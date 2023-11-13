function tarkasta(form) {
    var etunimi = form.enimi.value;
    var sukunimi = form.snimi.value;
    var sahkoposti = form.email.value;
    var palaute = form.palaute.value;
    var pallukka = form.mainos;
    var check = form.boksi;
    if (etunimi.length < 5) {
        alert("Anna v�hint�n 5-merkinen etunimi");
        form.enimi.focus();
        return false;
    }
    if (sukunimi.length < 5) {
        alert("Anna v�hint�n 5-merkkinen sukunimi");
        form.snimi.focus();
        return false;
    }
    var ehdot = /\S+@\S+/;
    if (!ehdot.test(sahkoposti)) {
        alert("Anna kunnon s�hk�posti");
        form.email.focus();
        return false;
    }

    if (palaute.length < 20) {
        alert("Palautteessa pit�� olla v�hint��n 20 merkki�");
        form.palaute.focus();
        return false;
    }

    var vastaus = false;
    for (var i = 0; i < pallukka.length; i++) {
        if (pallukka[i].checked == true) {
            vastaus = true;
        }
    }
    if (vastaus == false) {
        alert('Et ole valinnut haluatko mainoksia');
        return false;
    }

    var checkvastaus = false;
    for (var j = 0; j < check.length; j++) {
        if (check[j].checked == true) {
            checkvastaus = true;
        }
    }
    if (checkvastaus == false) {
        alert("Et valinnut, mik� on kivaa");
        return false;
    }
    else {
        alert("Kiitos lomakkeen t�yt�st�");
    }
}
function tyhjenna(lomake) {
    var clean = lomake.value;
    if (!confirm("Oletko varma?")) {
        return false;
    }
}