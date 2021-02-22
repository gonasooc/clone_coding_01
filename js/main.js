$(function(){
    const swiper = new Swiper('.visual-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {delay: 3000},
        speed: 1000,
      
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

    $('.gnb li, .gnb_bg').mouseenter(function(){
        $('.header_bottom').addClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $('.gnb_bg').stop().slideDown();
        $('.depth2_wrap').stop().fadeIn();
    });
      $('.gnb li, .gnb_bg').mouseleave(function(){
        $('.header_bottom').removeClass('on');
        $(this).removeClass('on');
        $('.gnb_bg').stop().slideUp();
        $('.depth2_wrap').stop().fadeOut();

    });


      let sw_visual = true;
      $('.btn_visual-slide').click(function(){
          if(sw_visual){
            $(this).addClass('play');
            swiper.autoplay.stop();
            sw_visual = false;
          } else {
            $(this).removeClass('play');
            swiper.autoplay.start();
            sw_visual = true;
          }
      });


      $('.exhibition-list li').mouseenter(function(){
        $(this).addClass('on');
        var exIndexNum = $(this).index();
        console.log(exIndexNum);
        $('.exhibition_bg_wrap div').eq(exIndexNum).fadeIn();
      })
      $('.exhibition-list li').mouseleave(function(){
        $(this).removeClass('on');
        $('.exhibition_bg_wrap div').fadeOut();
      })
     

})

// $('.franchise-menu a').mouseover(function(){
//   var num = $(this).css('background-image');
//   console.log(num);
//   var num2 = num.replace('_off', '_on');
//   console.log(num2);
//   $(this).css({'background-image':num2});
// });
// $('.franchise-menu a').mouseleave(function(){
//   var num = $(this).css('background-image');
//   console.log(num);
//   var num2 = num.replace('_on', '_off');
//   console.log(num2);
//   $(this).css({'background-image':num2});
// });