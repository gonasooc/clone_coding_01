$(document).ready(function(){
    $('.main-slide').slick({
        autoplay: true,
        dots: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 2000,
      });

    var mySwiper = new Swiper('.vitagram-slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 8,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
    
      // If we need pagination
      pagination: {
        el: '.vitagram-slide .swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.vitagram-slide .swiper-button-next',
        prevEl: '.vitagram-slide .swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.vitagram-slide .swiper-scrollbar',
      },
    })

    $('.login_off').mouseover(function(){
      $('.login-box').stop().fadeIn();
    })
    $('.login_off').mouseleave(function(){
      $('.login-box').stop().fadeOut();
    })
})