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
    // $('.menu').style.transition = 'transform 1s' 
    // $('.xclose')
    $('.menu').click(function(){
        $('.fadeblack').animate({left: 0}, 1000);
        $('.xclose').animate({left:0}, 1000);
    });

    $('.xclose').click(function(){
        $('.fadeblack').animate({left: '100%'}, 1000);
        $('.xclose').animate({left:'100%'}, 1000);

    })
})