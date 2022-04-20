$(function(){    
    let ct = 0; // 카운트 (imgSlideIn page)
    const imgLength = $('.imgSlideIn').children().length - 2;
    let li = '';
    for(let i = 0; i < imgLength; i++){
        li += (i == 0)? '<li class="act"></li>' : '<li></li>';
    }
    $('.page').html(li);
    /** imgSlideIn **/
    const imgSlideInWidth = $('.imgSlideIn').width(); // imgSlideIn의 크기
    const scrWidth = $(window).width(); // 화면의 크기
    const gap = (imgSlideInWidth - scrWidth) / 2; // (imgSlideIn - 화면의 크기) / 2
    $('.imgSlideIn').css('left', -gap + "px");

    $('.imgSlider').hide();
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.searchForm, .input-search').toggleClass('act');
    })

    /** navigation **/
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

    $('.imgs').click(function(e){
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

    $(window).scroll(function(){
        let stop = $(window).scrollTop();
        // console.log(stop);
        if(stop > 500){
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
        }
    })

    /** reserve **/
    $(window).scroll(function(){
        let stop = $(window).scrollTop();
        // console.log(stop);
        if(stop > 1000){
            $('.fadeIn').animate({
                opacity: 1
            }, 1000);
        }
    })

    $(".prev").click(function(e){
        e.preventDefault();
        mySlider(1);
    })

    $(".next").click(function(e){
        e.preventDefault();
        mySlider(-1);
    })
    
    setInterval(mySlider, 3000);
    
    function mySlider(idx=-1){
        const imgW = $('.opacity-1').width();
        $(".imgSlideIn").animate({
            left: `${(idx == 1)? (-gap + imgW + 15) : -(gap + imgW + 15)}px`
        }, 500, function(){
            myCallback(idx)
        })
    }

    function myCallback(idx=-1){
        $('.imgSlideIn div').removeClass('opacity-1');
        if(idx == -1){
            $('.imgSlideIn div:eq(0)').clone().appendTo('.imgSlideIn');
            $('.imgSlideIn div:eq(0)').remove();
        }else{
            $('.imgSlideIn div:last-child').clone().prependTo('.imgSlideIn');
            $('.imgSlideIn div:last-child').remove();
        }
        $('.imgSlideIn div:eq(2)').addClass('opacity-1');
        $('.imgSlideIn').css('left', -(gap) + 'px');

        if(idx == -1){
            ct++;
            if(ct == 3) ct = 0;
        }else{
            ct--;
            if(ct == -1) ct = 2;
        }
        li = '';
        for(i = 0; i<imgLength; i++){
            li += `<li${(i == ct)? ' class="act"' : ''}></li>`;
        }
        $('.page').html(li);
    }
})
