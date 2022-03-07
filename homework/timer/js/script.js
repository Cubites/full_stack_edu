var sec = -30;

var start = setInterval(function(){
    sec++;
    document.getElementById("pin").style.transform = "rotate(" + (6*sec) + "deg)";
}, 1000);