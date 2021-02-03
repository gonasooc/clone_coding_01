$(document).ready(function(){
    $('.main-slide').slick({
        autoplay: true,
        dots: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 2000,
      });

    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 8,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
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
    })

    $('.login_off').mouseover(function(){
      $('.login-box').stop().fadeIn();
    });
    $('.login_off').mouseleave(function(){
      $('.login-box').stop().fadeOut();
    });


    // 팝업창 부분 --------------------------------------------------- 서버에서 테스트 필요 ---
    $('.popup_wrap .popup-close_btn, #today_close').click(function(){
      if($('input[name=today_close]').is(':checked')){
        setCookie('vitabrid', 'close', 1);
        $('.popup_wrap').hide();
      } else {
        $('.popup_wrap').hide();
      }
    });

    $('.popup_wrap').show();
    if(getCookie('vitabrid') == 'close') {
      $('.popup_wrap').hide();
    } else {
      $('.popup_wrap').show();
    }


    $('#header .gnb > li').mouseenter(function(){
      $(this).find('.depth2_wrap').stop().slideDown();
    });
    $('#header .gnb > li').mouseleave(function(){
      $(this).find('.depth2_wrap').hide();
    });

    $('#header .depth2_wrap .depth2 > li').mouseenter(function(){
      $(this).find('.depth3_wrap .depth3 li').addClass('on');
    })
    $('#header .depth2_wrap .depth2 > li').mouseleave(function(){
      $(this).find('.depth3_wrap .depth3 li').removeClass('on');
    })
    

    // $('#header .depth2 > li').mouseenter(function(){
    //   $(this).find('.depth3_wrap').stop().slideDown();
    // })
    // $('#header .depth2 > li').mouseleave(function(){
    //   $('.depth3_wrap').stop().slideUp();
    // })



    $('.global-box').mouseenter(function(){
      $(this).addClass('on');
      $(this).parent().find('.text_wrap').addClass('on');
    });
    $('.global-box').mouseleave(function(){
      $(this).removeClass('on');
      $(this).parent().find('.text_wrap').removeClass('on');
    });
});


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
function setCookie(name, value, expiredays){
  var days=10;
  if(days){
      var date=new Date(); 
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires="; expires="+date.toGMTString();
  }else{
      var expires=""; 
  }
  document.cookie=name+"="+value+expires+"; path=/";
}