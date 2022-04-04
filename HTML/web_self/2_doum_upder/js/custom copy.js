function openNav(){
    document.getElementById("mynav").style.left = "0%";
}
function closeNav(){
    document.getElementById("mynav").style.left = "-100%";
}


var num = 0;

function slideMove(n){
    if(n == 0){
        num--;
        if(num < 0){
            document.getElementsByClassName("cont")[num+1].style.display = "none";
            num = 4;
            document.getElementsByClassName("cont")[num].style.display = "block";
        }else{
            document.getElementsByClassName("cont")[num+1].style.display = "none";
            document.getElementsByClassName("cont")[num].style.display = "block";
        }
    }else{
        num++;
        if(num > 4){
            document.getElementsByClassName("cont")[num-1].style.display = "none";
            num = 0;
            document.getElementsByClassName("cont")[num].style.display = "block";
        }else{
            document.getElementsByClassName("cont")[num-1].style.display = "none";
            document.getElementsByClassName("cont")[num].style.display = "block";
        }
    }

    document.getElementsByClassName("cont")
}