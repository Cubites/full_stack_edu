$(function(){
    $('.gnb').hover(function(){
        $('.lnb, .background').fadeToggle();
    })

    setInterval(slide, 3000); // == setInterval('slide()', 3000);

    $('.popup').click(function(event){
        event.preventDefault(); // a 링크의 기능을 없앰 == javascript:void(0)
        $('.pop').removeClass('boxnone');
    })
    $('.close').click(function(){
        $('.pop').addClass('boxnone');
    })

    // 체크박스, 라디오박스, select박스 => click(X), change(O)
    $('#partners').change(function(){
        let link = $(this).val();
        if(link){
            location.href=link;
        }
    })
});

function slide(){
    $('.slidein').animate({
        'left' : '-1200px'
    }, 1000, function(){
    // $('.slidein img').eq(0).clone().appendTo('.slidein');
    // $('.slidein img:first-child').clone().appendTo('.slidein');
    $('.slidein img:eq(0)').clone().appendTo('.slidein');
    $('.slidein img:eq(0)').remove();
    $('.slidein').css('left', 0);
    });
}
// $(복사위치).append(복사대상);
// $(복사대상).append(복사위치);