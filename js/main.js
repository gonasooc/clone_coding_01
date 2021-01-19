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
        $('.lang_list').show();
        btn_lang_sw = false;
      } else {
        $('.lang_list').hide();
        btn_lang_sw = true;
      }
    });
    $('.m_gnb .sidemenu > li > a').click(function(){
      $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
      $(this).toggleClass('on').parent().siblings().find('a').removeClass('on');
    });
    $('.hamburger_btn').click(function(){
      $('#header h1 a, .m_gnb, .line, body').toggleClass('on');
    });
    $('.quick .trigger_btn').click(function(){
      $(this).find('.btn_line').toggleClass('on');
      $(this).next().toggleClass('on');
    });
  });