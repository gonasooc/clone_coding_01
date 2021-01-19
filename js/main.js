$(document).ready(function(){
    $('.main-event-slide').slick({
      autoplay: true,
    });
    $('.menu-slide').slick({
      autoplay: false,
      arrows: false,
      slidesToShow: 3,
      dots: true,
      infinite: false
    });
    var btn_lang_sw = true;
    $('.lang_btn').click(function(){
      if(btn_lang_sw == true){
        $('.lang_list').slideDown();
        btn_lang_sw = false;
      } else {
        $('.lang_list').slideUp();
        btn_lang_sw = true;
      }
    });
    $('.m_gnb .sidemenu > li > a').click(function(){
      $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
    });
    $('.m_gnb .sidemenu > li > a').click(function(){
      $(this).toggleClass('on').parent().siblings().find('a').removeClass('on');
    });

    $('.hamburger_btn').click(function(){
      $('#header h1 a').toggleClass('on');
      $('.m_gnb').toggleClass('on');
      $('.line').toggleClass('on');
      $('body').toggleClass('on');
    });

  });