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

    $('m-left-top a.eq(0)').click(function(){
        
        
    });


    $('.popup').click(function(){
        $('.popwindow').css('display', 'block');
    });
    $('.close').click(function(){
        $('.popwindow').css('display', 'none');
    });

});


function act(a){
    let i = 0;
    for(i; i < 2; i++){
        $('a.eq(' + i + '1)').className('');
        $('.notice').className('notice');
        $('.gallery').className('gallery');
    }
    $('a.eq(' + a + '0)').addClass('active');
    if(a == 0){
        $('.notice').addClass('content-active');
    }else{
        $('.gallery').addClass('content-active');
    }
}