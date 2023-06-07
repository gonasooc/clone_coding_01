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
      });
      
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
      });

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


      $('#header .m_btn').click(function(){
        $('.m_gnb_wrap').addClass('on');
        $('.cover').fadeIn();
        $('body, html').css({'overflow':'hidden'});
      });
      $('.btn_m-close').click(function(){
        $('.m_gnb_wrap').removeClass('on');
        $('.cover').fadeOut();
        $('body, html').css({'overflow':'auto'});
      });

      $('.m_tab-list > ul > li').click(function(){
        $('.m_tab-list > ul > li').find('.m_depth2_wrap').hide();
        $(this).find('.m_depth2_wrap').show();
        $('.m_tab-list > ul > li').removeClass('on');
        $(this).addClass('on');
      });

      $('.m_tab-menu ul li').click(function(){
        var index_num = $(this).index();
        console.log(index_num);
        $('.m_tab-menu ul li').removeClass('on');
        $(this).addClass('on');
        $('.m_tab-list > ul').hide();
        $('.m_tab-list > ul').eq(index_num).show();
      });

      $('.btn_floating-banner-close').click(function(){
        $('.floating-banner_wrap').hide();
      });
      $('.floating-menu_wrap .btn_up').click(function(){
        $('html, body').animate({'scrollTop':0}, 500);
      });

      $(window).scroll(function(){
        var scroll_num = $(document).scrollTop();
        console.log(scroll_num);
        if(scroll_num > 100) {
          $('.floating-menu_wrap ul .btn_up-list').fadeIn();
        } else {
          $('.floating-menu_wrap ul .btn_up-list').fadeOut();
        }
      });

      
      var sw_search = true;
      $('#header .m_search').click(function(){
        if(sw_search){
         $(this).addClass('on');
         $('.search_wrap').slideDown(300, 'swing');
         $('body, html').css({"overflow":"hidden"});
         sw_search = false; 
        } else {
          $(this).removeClass('on');
         $('.search_wrap').slideUp(300, 'swing');
         $('body, html').css({"overflow":"auto"});
         sw_search = true; 
        }
      });
     
});