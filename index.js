var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById("Button-start");
var buttonStop = document.getElementById("Button-stop");
var buttonreset = document.getElementById("Button-reset");
var inerval;

function starttimer(){
    tens++;

    if(tens<9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tenSeconds>99){
        seconds++;
        appendSeconds.innerHTML = "0" = seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds>9){
        appendSeconds.innerHTML = seconds;
    }
}

buttonStart.onclick = function(){
    inerval = setInterval(startTimer);
}
buttonStop.onclick = function(){
    clearInterval(inerval);
}
buttonReset.onclick = function(){
    clearInterval(inerval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}
