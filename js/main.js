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
    })
    $('.login_off').mouseleave(function(){
      $('.login-box').stop().fadeOut();
    })

    $('.global-box').mouseenter(function(){
      $(this).addClass('on');
      $(this).parent().find('.text_wrap').addClass('on');
    })
    $('.global-box').mouseleave(function(){
      $(this).removeClass('on');
      $(this).parent().find('.text_wrap').removeClass('on');

    })

    

})