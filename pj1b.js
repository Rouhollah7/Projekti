function validateForm() {
    

    
    var name = document.getElementById("nimi").value;
    if (name.length < 3) {
        document.getElementById("nimisyotto").classList.add("error");
        return false;
    } else {
        document.getElementById("nimisyotto").classList.remove("error");
    }

    
    var email = document.getElementById("email").value;
    if (!emailRegex.test(email)) {
        document.getElementById("emailsyotto").classList.add("error");
        return false;
    } else {
        document.getElementById("emailsyotto").classList.remove("error");
    }

    
    var age = document.getElementById("ika").value;
    if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById("ikasyotot").classList.add("error");
        return false;
    } else {
        document.getElementById("ikasyotot").classList.remove("error");
    }

    return true;
}