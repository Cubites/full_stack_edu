let nav = document.getElementsByTagName('div');
// nav.forEach(element => {
//     console.log(element);
// });

let slideImg = document.querySelectorAll('.slide>img');
for(let i = 0; i < slideImg.length; i++){
    slideImg[i].style.zIndex = slideImg.length - i;
}

let imgNum = 0;

function fadeInOut(){
    if(imgNum == 2){
        for(let i = 0; i < slideImg.length; i++){
            slideImg[i].classList = "fadeIn";
        }
        imgNum = 0;
    }else{
        slideImg[imgNum].classList = "fadeOut";
        imgNum += 1;
    }
}

window.onload = () => {
    setInterval(fadeInOut, 3000);

    let contents = document.querySelectorAll(".contents>div");
    console.log(contents);
    contents.forEach((content) => {
        content.addEventListener('click', (e) => {
            console.log(1);
            console.log(contents.call(e.target));
        })
    })

}