function openNav(){
    document.getElementById("mynav").style.left = "0%";
}
function closeNav(){
    document.getElementById("mynav").style.left = "-100%";
}


var num = 0;

function slideMove(n){
    if(n == 0){
        var cont = document.getElementsByClassName("cont");
        num--;
        if(num < 0){
            cont[num+1].style.display = "none";
            num = 4;
            cont[num].style.display = "block";
        }else{
            cont[num+1].style.display = "none";
            cont[num].style.display = "block";
        }
    }else{
        num++;
        if(num > 4){
            cont[num-1].style.display = "none";
            num = 0;
            cont[num].style.display = "block";
        }else{
            cont[num-1].style.display = "none";
            cont[num].style.display = "block";
        }
    }
}