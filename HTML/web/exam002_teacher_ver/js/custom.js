$(function(){
   $('.gnb').hover(function(){
      $('.lnb, .background').fadeToggle();
   });
  
   setInterval(slide, 3000);
   
   $('.popup').click(function(event){
      event.preventDefault();
      $('.pop').removeClass('boxnone');
   });
  $('.close').click(function(){
      $('.pop').addClass('boxnone');
  }); 

  //라디오박스, 셀렉트박트 change
  $('#parters').change(function(){
     let link =  $(this).val();
     if(link){
         location.href=link;
     }
  });

});

function slide(){  
   $('.slidein').animate({
      'left' : '-1200px'
   }, 600, function(){
      $('.slidein img:eq(0)').clone().appendTo('.slidein');
      $('.slidein img:eq(0)').remove();
      $('.slidein').css('left', 0);
   });
}

