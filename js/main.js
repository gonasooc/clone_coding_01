$(document).ready(function(){
    var mySwiper = new Swiper('.visual-slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {delay: 4000},
        speed: 500,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
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
})