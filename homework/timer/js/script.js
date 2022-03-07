var sec = -30;

var timer = setInterval(time, 1000);

function time(){
    sec++;
    document.getElementById("pin").style.transform = "rotate(" + (6*sec) + "deg)";
    document.getElementById("seconds").value = (sec + 30);
}
function pause(){
    clearInterval(timer);
}

function start(){
    timer = setInterval(time, 1000);
}
function stop(){
    clearInterval(timer);
    sec = -30;
    document.getElementById("pin").style.transform = "rotate(" + (6*sec) + "deg)";
    document.getElementById("seconds").value = 0;
}