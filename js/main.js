$(function(){
    const swiper = new Swiper('.main-slide_wrap .swiper-container', {
        // Optional parameters
        direction: 'vertical',
        mousewheel: {
          invert: false,
        },
        speed: 1000,
        // If we need pagination
        pagination: {
          el: '.main-slide_wrap .swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.main-slide_wrap .swiper-button-next',
          prevEl: '.main-slide_wrap .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.main-slide_wrap .swiper-scrollbar',
        },
      });

    $('#main .btn_next').click(function(){
      swiper.slideNext(800);
    });

    $('.main-slide_wrap .nanumlist').slick({
      autoplay: true,
      slidesToShow: 3
    });

    var arr_video_src = ['https://www.youtube.com/embed/qtTAATc31fE', 'https://www.youtube.com/embed/XptdidvKPUA', 'https://www.youtube.com/embed/PiZE1Gq7xB0'];

    $('.main-slide_wrap .video-list li').click(function(){
      var num = $(this).index();
      console.log(num);
      $('.cover').show();
      $('.cover .modal_con').eq(num).show().find('iframe').attr('src', arr_video_src[num]);
    });

    $('#main .btn_close').click(function(){
      $('.cover').hide();
      $('.cover .modal_con').hide();
      $('.cover .modal_con iframe').attr('src', 'about:blank');
    });

})