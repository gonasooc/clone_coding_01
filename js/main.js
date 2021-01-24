$(function(){
    $('.m_menu').click(function(){
      $('.m_gnb').animate({'left':0}, 400);
      $('.cover').fadeIn();
      $('body').css({'overflow':'hidden'});
      $('.m_gnb').css({'overflow-y':'auto'});
    });
    $('.close').click(function(){
      $('.m_gnb').animate({'left':'-100%'}, 400);
      $('.cover').fadeOut();
      $('body').css({'overflow':'auto'});
    });

    var mySwiper = new Swiper('.visual-slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {delay: 4000},
        speed: 1000,
      
        // If we need pagination
        pagination: {
          el: '.visual-slide .swiper-pagination',
          clickable: true,
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
    var mySwiper2 = new Swiper('.best_wrap-slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      autoplay: {delay: 2000},
      speed: 1000,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10,
      // centeredSlides: true,
    
      // If we need pagination
      pagination: {
        el: '.best_wrap-slide .swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.best_wrap-slide .swiper-button-next',
        prevEl: '.best_wrap-slide .swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.best_wrap-slide .swiper-scrollbar',
      },
    });
    var mySwiper3 = new Swiper('.design_finder-slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      autoplay: {delay: 2000},
        speed: 1000,
      // If we need pagination
      pagination: {
        el: '.design_finder-slide .swiper-pagination',
      // centeredSlides: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.design_finder-slide .swiper-button-next',
        prevEl: '.design_finder-slide .swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
});