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

      $('.btn_top_wrap').click(function(){
        $('body, html').animate({'scrollTop':0}, 500)
      });

      $(window).scroll(function(){
        var windowScrollValue = $(this).scrollTop();
        console.log(windowScrollValue);
        if(windowScrollValue >= 116){
          $('#header').addClass('on');
        } else{
          $('#header').removeClass('on');
        }

        if(windowScrollValue >= 2300){
          $('.btn_top_wrap').fadeIn();
        } else{
          $('.btn_top_wrap').fadeOut();

        }
      });

      
      if(getCookie('lotte') == 'todayClose'){
        $('.popup-banner_wrap').hide();
      } else {
        $('.popup-banner_wrap').show();
      }

      $('.btn_today-close').click(function(){
        setCookie('lotte', 'todayClose', 1);
        $('.popup-banner_wrap').hide();
      })


      $('.btn_close').click(function(){
        $('.popup-banner_wrap').hide();
      });


      


      // $(window).scroll(function() {
      //   var window_value = $(this).scrollTop();
      //   if(scroll_value <= window_value) {
      //     $("#header").addClass("on");
      //   } else {
      //     $("#header").removeClass("on");
      //   } 
      // }); 

      
     

})


// getCookie
function getCookie(name){
  var value=null, search=name+"=";
  if(document.cookie.length > 0){
      var offset=document.cookie.indexOf(search);
      if(offset != -1){
          offset+=search.length;
          var end=document.cookie.indexOf(";", offset);
          if(end == -1) end=document.cookie.length;
          value=unescape(document.cookie.substring(offset, end));
      }
  } return value;
}
// setCookie
function setCookie(name, value, days){
  if(days){
      var date=new Date(); 
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires="; expires="+date.toGMTString();
  }else{
      var expires=""; 
  }
  document.cookie=name+"="+value+expires+"; path=/";
}
