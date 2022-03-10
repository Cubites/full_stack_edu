// $(document).ready(function (){
//     $('nav').hover(function (){
//         $('.lnb').attr({'display': 'block'});
//     }, function(){
//         $('.lnb').attr({'display': 'none'});
//     });
// });


setInterval(function (){
    var image = $('.slide>img').attr('src');
    var image1 = image.slice(0, -5);
    var image2 = image.slice(-4);
    var num = parseInt(image.slice(-5, -4)) + 1;
    console.log(num)
    if(num > 3){
        num = 1;
    }
    image = image1 + num + image2;
    $('.slide>img').attr('src', image);
}, 3000);

// setInterval(function (){
//     var num = 0;
//     num++;
//     if(num > 3){
//         num = 1;
//     }
//     for(var i = 1; i <= 3; i++){
//         $('slideImage')[i].slideDown();
//     }
//     $('slideImage')[num-1].slideUp();
// }, 3000);


function tab(n){
    if(n == 0){
        document.getElementsByClassName('notice-tab')[0].className = 'notice-tab active'
        document.getElementsByClassName('contents')[0].style.display = 'block'
        document.getElementsByClassName('gallery-tab')[0].className = 'gallery-tab'
        document.getElementsByClassName('gallery')[0].style.display = 'none'
    }else{
        document.getElementsByClassName('notice-tab')[0].className = 'notice-tab'
        document.getElementsByClassName('contents')[0].style.display = 'none'
        document.getElementsByClassName('gallery-tab')[0].className = 'gallery-tab active'
        document.getElementsByClassName('gallery')[0].style.display = 'flex'
    }
}