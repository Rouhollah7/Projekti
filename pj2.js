
let quizContainer = document.getElementById('quiz-container');
let results = [];

// Kysymys 1
let question1 = document.createElement('div');
question1.innerHTML = "<p>1. Mihin HTML-elementtiin sijoitamme JavaScript-koodin?</p>";
let options1 = document.createElement('p');
options1.innerHTML = "a. <is><br>b. <script><br>c. <body><br>d. clink>";
question1.appendChild(options1);
let answer1 = prompt("1. Mihin HTML-elementtiin sijoitamme JavaScript-koodin?\n" +
    "a. <is>\nb. <script>\nc. <body>\nd. clink>");
results.push("Vastaus 1: " + answer1);
quizContainer.appendChild(question1);

// Kysymys 2
let question2 = document.createElement('div');
question2.innerHTML = "<p>2. Mitä HTML-attribuuttia käytetään viittaamaan ulkoiseen JavaScript-tiedostoon?</p>";
let options2 = document.createElement('p');
options2.innerHTML = "a. sro<br>b. link<br>c. rel<br>d. href";
question2.appendChild(options2);
let answer2 = prompt("2. Mitä HTML-attribuuttia käytetään viittaamaan ulkoiseen JavaScript-tiedostoon?\n" +
    "a. sro\nb. link\nc. rel\nd. href");
results.push("Vastaus 2: " + answer2);
quizContainer.appendChild(question2);

// Kysymys 3
let question3 = document.createElement('div');
question3.innerHTML = '<p>3. Kuinka kirjoitat "Moikka" alert-viestinä?</p>';
let options3 = document.createElement('p');
options3.innerHTML = 'a. msg("Moikka");<br>b. alertBox("Moikka");<br>c. document.write("Moikka");<br>d. alert("Moikka");';
question3.appendChild(options3);
let answer3 = prompt('3. Kuinka kirjoitat "Moikka" alert-viestinä?\n' +
    'a. msg("Moikka");\nb. alertBox("Moikka");\nc. document.write("Moikka");\nd. alert("Moikka");');
results.push("Vastaus 3: " + answer3);
quizContainer.appendChild(question3);

// Kysymys 4
let question4 = document.createElement('div');
question4.innerHTML = "<p>4. Onko JavaScript suoraan 'Java' ohjelmointikielen sukulainen?</p>";
let options4 = document.createElement('p');
options4.innerHTML = "a. Kyllä<br>b. Ei";
question4.appendChild(options4);
let answer4 = prompt("4. Onko JavaScript suoraan 'Java' ohjelmointikielen sukulainen?\n" +
    "a. Kyllä\nb. Ei");
results.push("Vastaus 4: " + answer4);
quizContainer.appendChild(question4);

// Kysymys 5
let question5 = document.createElement('div');
question5.innerHTML = "<p>5. Pitääkö JavaScript-muuttujan alkaa tietyllä merkillä?</p>";
let options5 = document.createElement('p');
options5.innerHTML = "a. @<br>b. $<br>c. #<br>d. Ei tarvitse tiettyä merkkiä";
question5.appendChild(options5);
let answer5 = prompt("5. Pitääkö JavaScript-muuttujan alkaa tietyllä merkillä?\n" +
    "a. @\nb. $\nc. #\nd. Ei tarvitse tiettyä merkkiä");
results.push("Vastaus 5: " + answer5);
quizContainer.appendChild(question5);

// Tulosten näyttäminen
quizContainer.innerHTML += "<h2>Tulokset:</h2><p>" + results.join("<br>") + "</p>";
