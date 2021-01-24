$(document).ready(function(){
    var mySwiper = new Swiper('.visual-slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {delay: 4000},
        speed: 500,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    var sw1 = true;
    $('.visual-slide_wrap .btn_slide').click(function(){
      if(sw1 == true){
        $('.visual-slide_wrap .btn_slide').addClass('on');
        mySwiper.autoplay.stop();
        sw1 = false;
      } else {
        $('.visual-slide_wrap .btn_slide').removeClass('on');
        mySwiper.autoplay.start();
        sw1 = true;
      }
    });
    var sw2 = true;

    function bdBtView(listView, bottomView) {
      $('#footer .footer_inner .footer_left .terms li .familysite_box .button_list').css({'display': listView});
      $('#footer .footer_inner .footer_left .terms li .familysite_box button').css({'border-bottom': bottomView});
    }

    $('#footer .footer_inner .footer_left .terms li .familysite_box button').click(function(){
      if(sw2 == true){
        $('#footer .footer_inner .footer_left .terms li .familysite_box button').addClass('on');
        bdBtView('block', 'none');
        sw2 = false;
      } else {
        $('#footer .footer_inner .footer_left .terms li .familysite_box button').removeClass('on');
        bdBtView('none', '1px solid #fff');
        sw2 = true;
      }
    }); 

  $('body, html').click(function(e){
    if(!$(e.target).hasClass('family_btn')){
      $('#footer .footer_inner .footer_left .terms li .familysite_box button').removeClass('on');
        bdBtView('none', '1px solid #fff');
        sw2 = true;
    }
  })
}); 

    