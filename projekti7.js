function aani(elain) {
    aani = elain.id;
    var audio = new Audio('sounds/' + aani + '.mp3');
    audio.play();
    stop();

}

function stop() {
    console.log("stop");
    audio.stop();
}

