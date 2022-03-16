// $(document).ready(function (){
//     $('nav').hover(function (){
//         $('.lnb').attr({'display': 'block'});
//     }, function(){
//         $('.lnb').attr({'display': 'none'});
//     });
// });


// setInterval(function (){
//     var image = $('.slide>img').attr('src');
//     var image1 = image.slice(0, -5);
//     var image2 = image.slice(-4);
//     var num = parseInt(image.slice(-5, -4)) + 1;
//     console.log(num)
//     if(num > 3){
//         num = 1;
//     }
//     image = image1 + num + image2;
//     $('.slide>img').attr('src', image);
// }, 10000);

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

var num = 0;

$(function(){
    setInterval(function (){
        if(num == -900){
            num = 0;
            document.getElementsByClassName('images')[0].style.top = '0px';
        }
        num -= 300;
        var loc = num + 'px';
        $('.images').animate({'top': loc})
    }, 2000);

    
    $('.contents').show();
    $('.gallery').hide();
    $('.notice-tab').click(function(){
        $('.notice-tab').removeClass('z-index-1 z-index-3 active').addClass('z-index-3 active');
        $('.gallery-tab').removeClass('z-index-1 z-index-3 active').addClass('z-index-1');
        $('.contents').show();
        $('.gallery').hide();
    });
    $('.gallery-tab').click(function(){
        $('.notice-tab').removeClass('z-index-1 z-index-3 active').addClass('z-index-1');
        $('.gallery-tab').removeClass('z-index-1 z-index-3 active').addClass('z-index-3 active');
        $('.contents').hide();
        $('.gallery').show();
    });

    $('.popup button').click(function(){
        $('div.background').attr({"style": "display: none"});
    })
});

function popup(){
    $('.background').css("display", "block");
}