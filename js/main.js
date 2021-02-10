$(function(){

    // var scrollValue = $(window).scrollTop();
    // console.log(scrollValue);

    // $(window).scroll(function(){
    //   $('#header').slideUp(250);
    // });

    $(window).scroll(function(){
      var scroll_num = $(document).scrollTop();
      if(scroll_num > 0) {
          $('#header').slideUp(300);
      } else {
          $('#header').slideDown(300);
      }
  })


    const swiper = new Swiper('.visual-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: {delay: 4000},
        speed: 1000,
        touchRatio: 0,
      
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


      $('.gnb > li').mouseover(function(){
        $(this).find('.depth2_wrap').slideDown(200);
      });
      $('.gnb > li').mouseleave(function(){
        $(this).find('.depth2_wrap').hide();
      });

      var sw_btn_play_stop = true;
      $('.visual-slide .btn_play-stop').click(function(){
          if(sw_btn_play_stop){
            $(this).addClass('on');
            swiper.autoplay.stop();
            sw_btn_play_stop = false;
          } else {
            $(this).removeClass('on');
            swiper.autoplay.start();
            sw_btn_play_stop = true;
          }
      })


      const swiper2 = new Swiper('.notice-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        autoplay: {delay: 2000},
        speed: 1000,
      
        // If we need pagination
        pagination: {
          el: '.notice-slide .swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.notice-slide .swiper-button-next',
          prevEl: '.notice-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.notice-slide .swiper-scrollbar',
        },
      });


      const swiper3 = new Swiper('.accomm-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: {delay: 2000},
        speed: 1000,
      
        // If we need pagination
        pagination: {
          el: '.accomm-slide .swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.accomm-slide .swiper-button-next',
          prevEl: '.accomm-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.accomm-slide .swiper-scrollbar',
        },
      });

      const swiper4 = new Swiper('.time-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',

      
        // If we need pagination
        pagination: {
          el: '.time-slide .swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.time-slide .swiper-button-next',
          prevEl: '.time-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.time-slide .swiper-scrollbar',
        },
      });




})