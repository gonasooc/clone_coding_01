$(function(){
  $('.visual-slide').slick({
    autoplay: true,
    dots: true,
  });

  $('.banner-slide').slick({
    autoplay: true,
    dots: true,
    arrows: false,
  });

  $('#header .m_btn').click(function(){
    $('.m_gnb_wrap').animate({'left': 0}).css({'overflow':'auto'});
    $('.cover').fadeIn();
    $('body, html').css({'overflow':'hidden'});
  })
  $('.cover').click(function(){
    $('.m_gnb_wrap').animate({'left': '-100%'});
    $('.cover').fadeOut();
    $('body, html').css({'overflow':'auto'});
  })


  $(window).resize(function(){
    var num = $(this).width();
    console.log(num);    
    if(num <= 750){
      $('#main .visual-slide .slick-prev, #main .visual-slide .slick-next').hide();
      $('#main .visual-slide .slick-dots').show();
      $('#main .visual-slide .visual1 img').attr('src','./images/visual01_m.jpg');
      $('#main .visual-slide .visual2 img').attr('src','./images/visual02_m.jpg');
      $('#main .visual-slide .visual3 img').attr('src','./images/visual03_m.jpg');
      $('#main .visual-slide .visual4 img').attr('src','./images/visual04_m.jpg');
      $('#main .banner-slide .banner1 img').attr('src', './images/banner1_m.jpg');
      $('#main .banner-slide .banner2 img').attr('src', './images/banner2_m.jpg');
      $('#main .banner-slide .banner3 img').attr('src', './images/banner3_m.jpg');
      $('#main .banner-slide .banner4 img').attr('src', './images/banner4_m.jpg');
    } else {
      $('#main .visual-slide .slick-prev, #main .visual-slide .slick-next').show();
      $('#main .visual-slide .slick-dots').hide();
      $('#main .visual-slide .visual1 img').attr('src','images/visual01.jpg');
      $('#main .visual-slide .visual2 img').attr('src','images/visual02.jpg');
      $('#main .visual-slide .visual3 img').attr('src','images/visual03.jpg');
      $('#main .visual-slide .visual4 img').attr('src','images/visual04.jpg');
      $('#main .banner-slide .banner1 img').attr('src', './images/banner1.jpg');
      $('#main .banner-slide .banner2 img').attr('src', './images/banner2.jpg');
      $('#main .banner-slide .banner3 img').attr('src', './images/banner3.jpg');
      $('#main .banner-slide .banner4 img').attr('src', './images/banner4.jpg');
    }   
  })
  
  var width_num = $(window).width();
  if(width_num <= 750){
      $('#main .visual-slide .slick-prev, #main .visual-slide .slick-next').hide();
      $('#main .visual-slide .slick-dots').show();
      $('#main .visual-slide .visual1 img').attr('src','./images/visual01_m.jpg');
      $('#main .visual-slide .visual2 img').attr('src','./images/visual02_m.jpg');
      $('#main .visual-slide .visual3 img').attr('src','./images/visual03_m.jpg');
      $('#main .visual-slide .visual4 img').attr('src','./images/visual04_m.jpg');
      $('#main .banner-slide .banner1 img').attr('src', './images/banner1_m.jpg');
      $('#main .banner-slide .banner2 img').attr('src', './images/banner2_m.jpg');
      $('#main .banner-slide .banner3 img').attr('src', './images/banner3_m.jpg');
      $('#main .banner-slide .banner4 img').attr('src', './images/banner4_m.jpg');
  } else {
      $('#main .visual-slide .slick-prev, #main .visual-slide .slick-next').show();
      $('#main .visual-slide .slick-dots').hide();
      $('#main .visual-slide .visual1 img').attr('src','images/visual01.jpg');
      $('#main .visual-slide .visual2 img').attr('src','images/visual02.jpg');
      $('#main .visual-slide .visual3 img').attr('src','images/visual03.jpg');
      $('#main .visual-slide .visual4 img').attr('src','images/visual04.jpg');
      $('#main .banner-slide .banner1 img').attr('src', './images/banner1.jpg');
      $('#main .banner-slide .banner2 img').attr('src', './images/banner2.jpg');
      $('#main .banner-slide .banner3 img').attr('src', './images/banner3.jpg');
      $('#main .banner-slide .banner4 img').attr('src', './images/banner4.jpg');
  }


  $('#footer .btn_top').click(function(){
    $('html').animate({'scrollTop':0});
  });

  $('.model_list li').mouseenter(function(){
    var num = $(this).find('img').attr('src');
    // console.log(num);
    var num2 = num.replace('_off', '_on');
    console.log(num2);
    $(this).find('img').attr('src', num2);
  })
  $('.model_list li').mouseleave(function(){
    var num = $(this).find('img').attr('src');
    // console.log(num);
    var num2 = num.replace('_on', '_off');
    console.log(num2);
    $(this).find('img').attr('src', num2);
  })
})