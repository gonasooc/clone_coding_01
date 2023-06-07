$(function(){
    const swiper = new Swiper('.visual-slide_wrap .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
      
        // If we need pagination
        pagination: {
          el: '.visual-slide_wrap .swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.visual-slide_wrap .swiper-button-next',
          prevEl: '.visual-slide_wrap .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.visual-slide_wrap .swiper-scrollbar',
        },
      });

    $('.btn_hamburger').click(function(){
      $('#m_gnb_wrap').addClass('on').css({'overflow':'auto'});
      $('.cover').fadeIn();
      $('body, html').css({'overflow':'hidden'});
    })
    $('.cover').click(function(){
      $('#m_gnb_wrap').removeClass('on').css({'overflow':'hidden'});
      $('.cover').fadeOut();
      $('body, html').css({'overflow':'auto'});
    })

    $('#header .gnb li').mouseenter(function(){
      $(this).find('.depth2').stop().fadeIn(200);
    })
    $('#header .gnb li').mouseleave(function(){
      $(this).find('.depth2').stop().fadeOut(200);
    })


    $('.content-list li').mouseenter(function(){
      // $(this).find('img').animate({'opacity':0});
      var num = $(this).find('img').attr('src');
      var num2 = num.replace('_ot', '_ov');
      $(this).find('img').attr('src', num2);
    })
    $('.content-list li').mouseleave(function(){
      var num = $(this).find('img').attr('src');
      var num2 = num.replace('_ov', '_ot');
      $(this).find('img').attr('src', num2);
    })


    $(window).resize(function(){
      var num = $(this).width();
      console.log(num);    
      if(num <= 750){
        $('.visual-slide_wrap .visual-slide01 a img').attr('src', './images/m_visual_a.jpg');
        $('.visual-slide_wrap .visual-slide02 a img').attr('src', './images/m_visual_b.jpg');
        $('.slogan_wrap .slogan_inner p').html('언제 어디서나 라푸마와 함께라면<br>당신의 액티브한 순간들은 더욱 FRESH하게<br>변화할 것입니다.')
        $('.content-list .list1 img').attr('src', './images/m_catalogue.jpg');
        $('.content-list .list2 img').attr('src', './images/m_video.jpg');
        $('.content-list .list3 img').attr('src', './images/m_product.jpg');
        $('.content-list .list4 img').attr('src', './images/m_athletic.jpg');
        $('.content-list .list5 img').attr('src', './images/m_camping.jpg');        
      } else {
        $('.visual-slide_wrap .visual-slide01 a img').attr('src', './images/visual_a.jpg');
        $('.visual-slide_wrap .visual-slide02 a img').attr('src', './images/visual_b.jpg');
        $('.slogan_wrap .slogan_inner p').html("언제 어디서나 라푸마와 함께라면 당신의 액티브한 순간들은 더욱 FRESH하게 변화할 것입니다.<br>2016년 라푸마의 <strong>'리듬 컬렉션'</strong>과 <strong>'프레쉬 컬렉션'</strong>을 만나보세요.")
        $('.content-list .list1 img').attr('src', './images/cata_ot.jpg');
        $('.content-list .list2 img').attr('src', './images/video_ot.jpg');
        $('.content-list .list3 img').attr('src', './images/product_ot.jpg');
        $('.content-list .list4 img').attr('src', './images/athletic_ot.jpg');
        $('.content-list .list5 img').attr('src', './images/camping_ot.jpg');     
      }   
    });
    
    var width_num = $(window).width();
      if(width_num <= 750){
        $('.visual-slide_wrap .visual-slide01 a img').attr('src', './images/m_visual_a.jpg');
        $('.visual-slide_wrap .visual-slide02 a img').attr('src', './images/m_visual_b.jpg');
        $('.slogan_wrap .slogan_inner p').html('언제 어디서나 라푸마와 함께라면<br>당신의 액티브한 순간들은 더욱 FRESH하게<br>변화할 것입니다.')
        $('.content-list .list1 img').attr('src', './images/m_catalogue.jpg');
        $('.content-list .list2 img').attr('src', './images/m_video.jpg');
        $('.content-list .list3 img').attr('src', './images/m_product.jpg');
        $('.content-list .list4 img').attr('src', './images/m_athletic.jpg');
        $('.content-list .list5 img').attr('src', './images/m_camping.jpg');   
      } else {
        $('.visual-slide_wrap .visual-slide01 a img').attr('src', './images/visual_a.jpg');
        $('.visual-slide_wrap .visual-slide02 a img').attr('src', './images/visual_b.jpg');
        $('.slogan_wrap .slogan_inner p').html("언제 어디서나 라푸마와 함께라면 당신의 액티브한 순간들은 더욱 FRESH하게 변화할 것입니다.<br>2016년 라푸마의 <strong>'리듬 컬렉션'</strong>과 <strong>'프레쉬 컬렉션'</strong>을 만나보세요.")
        $('.content-list .list1 img').attr('src', './images/cata_ot.jpg');
        $('.content-list .list2 img').attr('src', './images/video_ot.jpg');
        $('.content-list .list3 img').attr('src', './images/product_ot.jpg');
        $('.content-list .list4 img').attr('src', './images/athletic_ot.jpg');
        $('.content-list .list5 img').attr('src', './images/camping_ot.jpg');     
      }


    $('#footer .btn_family').click(function(){
      $('#footer .family-list').slideToggle();
      $('#footer .family-list').toggleClass('on');
      $(this).toggleClass('on');
    });

});