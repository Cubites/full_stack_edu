$(function(){
    setInterval(slide, 3000);

    function slide(){
    $('.slideMove').animate({
        'left': '-1200px'
    }, 500, function(){
        $('.slideMove img:eq(0)').clone().appendTo('.slideMove');
        $('.slideMove img:eq(0)').remove();
        $('.slideMove').css('left', 0);
    });
    }

    $('.tab-name>div').click(function(e){
        e.preventDefault();
        var link = $(this).find('a').attr('href');
        $('.tab-name>div').removeClass('active');
        $(this).addClass('active');
        $('.tab-content ul').removeClass('active-cont');
        $(link).addClass('active-cont');
    })

    $('.popup').click(function(){
        $('.popupWindow').css('display', 'block');
    })
    $('#close').click(function(){
        $('.popupWindow').css('display', 'none');
    })
});