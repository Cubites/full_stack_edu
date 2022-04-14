$(function(){
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.searchForm, .input-search').toggleClass('act');
    })

    $('.gnb>li').hover(function(){
        // $(this).find('.lnb').slideToggle(500);
        $(this).find('.lnb').css("display", "flex");
        $(this).find('.lnb').css("flex-direction", "column");
    }, function(){
        $(this).find('.lnb').css("display", "none");
    })
})