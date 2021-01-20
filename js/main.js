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

    // var $except = $('.m_gnb').find('.lang_btn');
    //   console.log($except.index());
    //   $('body').find('.lang_wrap').not('.lang_btn').click(function(){
    //     $('.lang_list').hide();
    //   });

    var btn_lang_sw = true;
    $('.lang_btn').click(function(){
      if(btn_lang_sw == true){
        $(this).addClass('on');
        $('.lang_list').show();
        btn_lang_sw = false;
      } else {
        $(this).removeClass('on');
        $('.lang_list').hide();
        btn_lang_sw = true;
      }
    });

    $('html, body').click(function(e){
      if(!$(e.target).hasClass('lang_btn')){
        $('.lang_list').hide();
        $('.lang_btn').removeClass('on');
        btn_lang_sw = true;
      }
    });

    // $(window).scroll(function(){
    //     $('#header').addClass('on');
    // });

    var scroll_value = $("#scroll_point").offset().top;
    $(window).scroll(function() {
      var window_value = $(this).scrollTop();
      if(scroll_value <= window_value) {
        $("#header").addClass("on");
      } else {
        $("#header").removeClass("on");
      } 
    }); 

    $('.m_gnb .sidemenu > li > a').click(function(){
      $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
      $(this).toggleClass('on').parent().siblings().find('a').removeClass('on');
    });
    $('.hamburger_btn').click(function(){
      $('#header h1 a, .m_gnb, .line, body').toggleClass('on');
      $('#header').removeClass('on');
      $('.m_gnb .sidemenu > li').find('a').removeClass().next().slideUp();
      // $('.m_gnb .sidemenu > li').find('.depth2').slideUp();
    });
    $('.quick .trigger_btn').click(function(){
      $(this).children('.btn_line').toggleClass('on');
      $(this).next().toggleClass('on');
    });

    $('a').attr('href', 'javascript:;');
    // a 클릭했을 때 상단으로 가는 거 막으려고 넣은 임시 코드


  });