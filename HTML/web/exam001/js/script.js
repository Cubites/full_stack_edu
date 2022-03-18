// $(function(){
//     $('.lnb').hide()
//     $('nav').hover(function(){
//         $('.lnb').fadeToggle();
//     });
// });

$(function(){
    $('nav').hover(function(){
        $(this).find('ul.lnb').fadeToggle();
    });

    $('ul.lnb>li').hover(function(){ // 서브메뉴의 마우스 올라간 곳의 li 순서값을 찾음 
        var ind = $('li').index(this) - 4; // li 순서값이 모든 li번호로 나오므로 주메뉴 li만큼 뺌
        $('ul.gnb').find('li').eq(ind).toggleClass('active'); // 주메뉴 li의 순서본호에 active 클래스를 마우스를 올리면 넣고 마우스가 빠지면 사라지게 한다.
        // $('ul.gnb>li:nth-child('+ ind +')').toggleClass('active');
    })

    /* slider */
    setInterval(slide, 3000);

    function slide(){
        $('.slidein').animate({
            'top': '-300px' // -300px 위로 밀음
        }, 500, function(){
            $('.slidein img:eq(0)').clone().appendTo('.slidein');
            // -300px 밀려있는 이미지를 복사해서 제일 마지막으로 붙여 넣음
            $('.slidein img:eq(0)').remove(); // 이미 복사된 -300에 있는 이미지는 삭제
            $('.slidein').css('top', 0); // 스타일시트 위치값을 0으로 초기화
        });
    }

    $('.tab-nav>li').click(function(e){
        e.preventDefault();
        var link = $(this).find('a').attr('href');
        $('.tab-nav>li').removeClass('act');
        $(this).addClass('act');
        $('.tab-content ul').removeClass('act');
        $(link).addClass('act');
    });


    $('.popup').click(function(e){
        e.preventDefault();
        $('.pop').fadeIn();
    });

    $('.close').click(function(){
        $('.pop').fadeOut();
    });
});