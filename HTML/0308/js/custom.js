function navFunc(){
    var x = document.getElementsByClassName("topnav")[0];
    if(x.className == "topnav"){
        x.className += " submenu";
    }else{
        x.className = "topnav";
    }
}