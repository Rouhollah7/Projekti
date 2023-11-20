function aani(elain) {
    var aani = elain.id;
    var audio = new Audio('sounds/' + aani + '.mp3');
    audio.play();
    stop(audio);

}

function stop() {
    console.log("stop");
    audio.stop();
}




