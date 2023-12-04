function playGame(playerChoice) {
    const vaihtoehdot = ['kivi', 'paperi', 'sakset'];
    const pelaajanValinta = playerChoice;
    const tietokoneenValinta = vaihtoehdot[Math.floor(Math.random() * vaihtoehdot.length)];

    document.getElementById('result').innerHTML = `
        Valitsit: ${pelaajanValinta.toUpperCase()}<br>
        Tietokone valitsi: ${tietokoneenValinta.toUpperCase()}
    `;
    determineWinner(pelaajanValinta, tietokoneenValinta);
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        displayResult('Tasapeli!');
    } else if (
        (playerChoice === 'kivi' && computerChoice === 'kakset') ||
        (playerChoice === 'paperi' && computerChoice === 'kivi') ||
        (playerChoice === 'sakset' && computerChoice === 'paperi')
    ) {
        displayResult('Voitit!');
    } else {
        displayResult('Hävisit!');
    }
}

function displayResult(result) {
    document.getElementById('result').innerHTML += `<br>${result}`;
}
