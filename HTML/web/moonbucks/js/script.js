$(function(){
    $('.imgSlider').hide();
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.searchForm, .input-search').toggleClass('act');
    })

    $('.gnb>li').hover(function(){
        $(this).find('.lnb').slideToggle(500);
    })

    $('.mobile-nav-box>li').click(function(){
        if($(this).find('.fa-solid').hasClass('fa-angle-down')){
            $(this).find('.fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up');
        }else{
            $(this).find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
        $(this).find('.mobile-lnb').slideToggle();
    })

    $('.menu').click(function(){
        $('.wrapper').css({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        }).animate({
            left: '-70%'
        }, 500)

        $('.fadeblack').css({
            display: 'block',
            top: 0,
            left: '100%'
        }).animate({
            left: 0
        }, 500);
    })

    $('.xclose').click(function(){
        $('.wrapper').animate({
            left: 0
        }, 500, function(){
            $('.wrapper').css('position', 'relative')
        })

        $('.fadeblack').animate({
            left: '100%'
        }, 500, function(){
            $('.fadeblack').css('display', 'none');
        })
    })

    $('.imgs').click((e) => {
        e.preventDefault();
        $('.imgSlider').slideToggle("fast", function(){
            if($(this).css('display') == 'none'){
                $('.imgs').find('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }else{
                $('.imgs').find('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
        });
      
        // $('.imgSlider').slideToggle(500);
        // $('.imgs .fa-solid').toggleClass('fa-chevron-down');
        // $('.imgs .fa-solid').toggleClass('fa-chevron-up');
    })

    $('.notice-slider').slick({
        autoplay: true,
        autoplayspeed: 2000,
        vertical: true,
        arrows: false
    });

    $('.imgSliderClass').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                autoplay: true,
                autoplayspeed: 2000
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                autoplay: true,
                autoplayspeed: 2000
                }
            }
        ]
    });
    $(".summer-bg").hover(() => {
        $(".l-r").animate({
            left: 0,
            opacity: 1
        }, {
            duration: 1500,
            easing: "swing"
        });
        $(".r-l").animate({
            right: 0,
            opacity: 1
        }, {
            duration: 1500,
            easing: "swing"
        });
    });

    /** reserve **/
    $('.reserve').hover(() => {
        $('.fadeIn').animate({
            opacity: 1
        }, 1000);
    });

    setInterval(mySlider, 3000);
})

function mySlider(){
    let wi = $('.imgSlideIn>div>img').innerWidth();
    console.log(wi);
    $(".imgSlideIn").animate({
        left: "-834px"
    }, 500, function(){
        $('.imgSlideIn div').removeClass('opacity-1');
        $('.imgSlideIn div:eq(0)').clone().appendTo('.imgSlideIn');
        $('.imgSlideIn div:eq(0)').remove();
        $('.imgSlideIn div:eq(1)').addClass('opacity-1');
        $('.imgSlideIn').css('left', '0');
    })
}