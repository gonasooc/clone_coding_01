$(document).ready(function(){
    var mySwiper = new Swiper('.main-slide_wrap .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {delay: 2000},
        speed: 1000,
        
      
        // If we need pagination
        pagination: {
          el: '.main-slide_wrap .swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.main-slide_wrap .swiper-button-next',
          prevEl: '.main-slide_wrap .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.main-slide_wrap .swiper-scrollbar',
        },
      });

    var mySwiper2 = new Swiper('.swiper_wrap .swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 1000,
      autoplay: {delay: 2000},
      loop: false,
      observer: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper_wrap .swiper-pagination',
        clickable: true,

      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper_wrap .swiper-button-next',
        prevEl: '.swiper_wrap .swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper_wrap .swiper-scrollbar',
      },
    })


    $('.btn_menu').click(function() {
      $('.m_gnb_wrap').animate({'left':0},400);
      $('.cover').fadeIn(500);
      $('body').css({'overflow':'hidden'});
      $('.m_gnb').css({'overflow-y':'auto'});
      });
    $('.m_exit').click(function() {
      $('.m_gnb_wrap').animate({'left':'-100%'},400);
      $('.cover').fadeOut(500);
      $('body').css({'overflow':'auto'});
      });



    $('.btn_tab li').click(function(){
      var index_num = $(this).index();
      console.log(index_num);
      $('.btn_tab > li > a').removeClass('on');
      $(this).find('a').addClass('on');
      $('.swiper_wrap .swiper-container').hide();
      $('.swiper_wrap .swiper-container').eq(index_num).show();
    });

    $('.popup .close .txt_btn').click(function(){
      $('.popup').hide();
    });
    

    $('.m_menu>li>a').click(function(){
      $(this).next().slideToggle().parents().siblings().find('.depth2').slideUp();
      $(this).find('.arrow_icon').toggleClass('on').parents('li').siblings().find('.arrow_icon').removeClass('on');
    });
});