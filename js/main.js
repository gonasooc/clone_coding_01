$(function() {
    var sw = true;
    $('.m_btn').click(function() {
        if(sw == true) {
          $('.m_btn').addClass('on');
          $('.m_gnb').animate({'left':0},200);
          $('#wrap').animate({'left':'274px'},200);
          $('body, html').css({'overflow':'hidden'});
          $('.cover').fadeIn(200);
          sw = false;
        } else {
          $('.m_btn').removeClass('on');
          $('.m_gnb').animate({'left':'-274px'},200);
          $('#wrap').animate({'left':0},200);
          $('body, html').css({'overflow':'auto'});
          $('.cover').fadeOut(200);
          sw = true;
        }
     });

     $('.m_search').click(function(){
       $('.m_all_search').fadeIn(200);
       $('body, html').css({'overflow':'hidden'});
     });
     $('.btn_search-close').click(function(){
      $('.m_all_search').fadeOut(200);
      $('body, html').css({'overflow':'auto'});
    });

     var mySwiper = new Swiper('.visual-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {delay: 3000},
      
        // If we need pagination
        pagination: {
          el: '.visual-slide .swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.visual-slide .swiper-button-next',
          prevEl: '.visual-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.visual-slide .swiper-scrollbar',
        },
      });

      var mySwiper2 = new Swiper('.news-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {delay: 3000},
      
        // If we need pagination
        pagination: {
          el: '.news-slide .swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.news-slide .swiper-button-next',
          prevEl: '.news-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.news-slide .swiper-scrollbar',
        },
      });

      const mySwiper3 = new Swiper('.main_health .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 100,
      
        // If we need pagination
        pagination: {
          el: '.main_health .swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.main_health .swiper-button-next',
          prevEl: '.main_health .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.main_health .swiper-scrollbar',
        },
      });
});