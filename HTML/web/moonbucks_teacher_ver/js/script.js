$(function(){
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.searchForm,.input-search').toggleClass('act');
    });
});