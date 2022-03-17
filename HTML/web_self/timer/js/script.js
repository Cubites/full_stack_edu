var sec = -30;
var statement = false;
// var timer = setInterval(time, 1000);
var timer;

function time(){
    sec++;
    document.getElementById("pin").style.transform = "rotate(" + (6*sec) + "deg)";
    document.getElementById("seconds").value = (sec + 30);
}
function pause(){
    clearInterval(timer);
    statement = false;
}

function start(){
    if(statement == false){
        statement = true;
        timer = setInterval(time, 1000);
    }
}
function stop(){
    clearInterval(timer);
    sec = -30;
    document.getElementById("pin").style.transform = "rotate(" + (6*sec) + "deg)";
    document.getElementById("seconds").value = 0;
    statement = false;
}