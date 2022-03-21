$(function(){

    setInterval(slide, 3000);

    function slide(){
        $('.slider').animate({
            'left': '-1200px'
        }, 1000, function(){
            $('.slider img:eq(0)').clone().appendTo('.slider');
            $('.slider img:eq(0)').remove();
            $('.slider').css('left', 0);
        });
    }

    $('.not-top').click(function(){
        $('.not-top').toggleClass('active');
        $('.gal-top').toggleClass('active');
        $('.notice').toggleClass('content-active');
        $('.gallery').toggleClass('content-active');
    });
    $('.gal-top').click(function(){
        $('.not-top').toggleClass('active');
        $('.gal-top').toggleClass('active');
        $('.notice').toggleClass('content-active');
        $('.gallery').toggleClass('content-active');
    });


    $('.popup').click(function(){
        $('.popwindow').css('display', 'block');
    });
    $('.close').click(function(){
        $('.popwindow').css('display', 'none');
    });

});