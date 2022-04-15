$(function(){
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
        $('.mobile-nav').css("display", "block");
        $('.fadeblack').animate({
            left: 0
        }, 1000);
    })
    $('.xclose').click(() => {
        $('.fadeblack').animate({
            left: '100%'
        }, 1000, () => {
            $('.mobile-nav').css("display", "none");
        });
    })
})