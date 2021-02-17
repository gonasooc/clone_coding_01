$(function(){
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
      })
      var sw1 = true;
      $('.btn_slide').click(function(){
        if(sw1 == true){
          $('.btn_slide').addClass('on');
          mySwiper.autoplay.stop();
          sw1 = false;
        } else {
          $('.btn_slide').removeClass('on');
          mySwiper.autoplay.start();
          sw1 = true;
        }
      });

      var mySwiper2 = new Swiper('.section9-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {delay: 3000},
      
        // If we need pagination
        pagination: {
          el: '.section9-slide .swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.section9-slide .swiper-button-next',
          prevEl: '.section9-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.section9-slide .swiper-scrollbar',
        },
      })

      const swiper3 = new Swiper('.section5-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.section5-slide .swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.section5-slide .swiper-button-next',
          prevEl: '.section5-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.section5-slide .swiper-scrollbar',
        },
      });
});