$(document).ready(function(){
    $('.main-slide').slick({
        autoplay: true,
        dots: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 2000,
      });

    var mySwiper = new Swiper('.vitagram_wrap .swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 8,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
    
      // If we need pagination
      pagination: {
        el: '.vitagram_wrap .swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.vitagram_wrap .swiper-button-next',
        prevEl: '.vitagram_wrap .swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.vitagram_wrap .swiper-scrollbar',
      },
    })

    $('.login_off').mouseover(function(){
      $('.login-box').stop().fadeIn();
    });
    $('.login_off').mouseleave(function(){
      $('.login-box').stop().fadeOut();
    });


    // 팝업창 부분 
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
      $(this).siblings().find('.depth3_wrap .depth3 li').removeClass('on');
      $(this).find('.depth3_wrap').show();
      $(this).siblings().find('.depth3_wrap').hide();
    });
    // $('#header .depth2_wrap .depth2 > li').mouseleave(function(){
    //   $(this).find('.depth3_wrap .depth3 li').removeClass('on');
    // });
    
    $('.global-box').mouseenter(function(){
      $(this).addClass('on');
      $(this).parent().find('.text_wrap').addClass('on');
    });
    $('.global-box').mouseleave(function(){
      $(this).removeClass('on');
      $(this).parent().find('.text_wrap').removeClass('on');
    });

    $(window).scroll(function(){
      const VarNum = 675;
      const windowScrollTop = $(this).scrollTop();
      const heroProductOffset = $('.hero_product_wrap').offset().top - VarNum;
      const loungeOffset = $('.lounge_wrap').offset().top - VarNum;
      const middleBannerOffset = $('.middle-banner_wrap').offset().top - VarNum;
      const vitagramOffset = $('.vitagram_wrap').offset().top - VarNum;
      const noticeOffset = $('.notice_wrap').offset().top - VarNum;

      console.log(windowScrollTop);
      console.log(loungeOffset);
      if(windowScrollTop > heroProductOffset){
        $('.hero_product_wrap').addClass('on');
      } 
      if(windowScrollTop > loungeOffset){
        $('.lounge_wrap').addClass('on');
      }
      if(windowScrollTop > middleBannerOffset){
        $('.middle-banner_wrap').addClass('on');
      } 
      if(windowScrollTop > vitagramOffset){
        $('.vitagram_wrap').addClass('on');
      } 
      if(windowScrollTop > noticeOffset){
        $('.notice_wrap').addClass('on');
      } 
    });


  //   $(window).scroll(function(){
  //     const windowScrollValue = $(this).scrollTop();
  //     const contactNum = $('.contact_wrap').offset().top - 700;
  //     const workNum = $('.works_wrap').offset().top - 500;
  //     if(windowScrollValue >= 80){
  //         $('#header, .btn_top_wrap').addClass('on');
  //     } else {
  //         $('#header, .btn_top_wrap').removeClass('on');
  //     }

  //     if(windowScrollValue > contactNum){
  //         $('.biz-card').addClass('on');
  //     } else {
  //         $('.biz-card').removeClass('on');
  //     }

  //     if(windowScrollValue > workNum){
  //         $('.works-box > ul > li').addClass('on');
  //     } else {
  //         $('.works-box > ul > li').removeClass('on');
  //     }
  // });


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
function setCookie(name, value, days){
  // var days=10;
  if(days){
      var date=new Date(); 
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires="; expires="+date.toGMTString();
  }else{
      var expires=""; 
  }
  document.cookie=name+"="+value+expires+"; path=/";
}