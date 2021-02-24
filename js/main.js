$(function(){

    $('a').attr('href', 'javascript:;');
    // 클릭했을 때 상단으로 가는 거 임시로 막기 위해 넣은 코드

    $('.gnb').mouseenter(function(){
        $('#header').addClass('on');
        $('#header .util .lang-box .btn_lang').addClass('on');
        $('#header .gnb_bg, #header .depth2').stop().slideDown(150);
    });
    $('.gnb').mouseleave(function(){
        $('#header').removeClass('on');
        $('#header .util .lang-box .btn_lang').removeClass('on');
        $('#header .gnb_bg, #header .depth2').stop().slideUp(150);
    });

    $('#header .lang-box').click(function(){
        $('#header .btn_lang').addClass('on');
        $('#header .lang-list').addClass('on');
    });
    $('#header .lang-box').mouseleave(function(){
        $('#header .btn_lang').removeClass('on');
        $('#header .lang-list').removeClass('on');
    });

    $('.modal-tab li').click(function(){
        var index_num = $(this).index();
        console.log(index_num);
        $('.cover').fadeIn();
        $('.modal-list_wrap').addClass('on');
        $('.modal-list li').eq(index_num).show().siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    });

  

    $('.modal-list_wrap .btn_close').click(function(){
        $('.modal-list_wrap').removeClass('on');
        $('.cover').fadeOut();
    });


    $('#main .mainCon1 ul li').mouseenter(function(){
        $(this).addClass('on').find('a').parent().siblings().css({'filter':'brightness(60%)'});
    });
    $('#main .mainCon1 ul li').mouseleave(function(){
        $(this).removeClass('on').find('a').parent().siblings().css({'filter':'brightness(100%)'});
    });

    // $("#video01").bind("ended", function() {
    //     document.getElementById("video02").play();
    // });
    // $("#video02").bind("ended", function() {
    //     document.getElementById("video03").play();
    // });
    // $("#video03").bind("ended", function() {
    //     document.getElementById("video01").play();
    // });


    var video;
    var videoNum = 0;
    var videoArr = ['./videos/main_video01.mp4', './videos/main_video02.mp4', './videos/main_video03.mp4', './videos/main_video04.mp4', './videos/main_video05.mp4', './videos/main_video06.mp4', './videos/main_video09.mp4', './videos/main_video10.mp4', './videos/main_video14.mp4', './videos/main_video15.mp4', './videos/main_video17.mp4', './videos/main_video18.mp4', './videos/main_video21.mp4'];

    function addVideo(){
        $('#video').attr('src', videoArr[videoNum]);
        video = $('#video').get(0);
        video.play();
        chkEnded();
    }

    addVideo();

    function chkEnded(){
        video.onended = function(){
        console.log('재생끝!!');
        if(videoNum == videoArr.length - 1){
            videoNum = 0;
        } else {
            videoNum++;
        }

        addVideo();
        }
    }
    
    
    $('.scroll_down').click(function(){
        var scrollValue = $('#scrollArea').offset().top;
        $('body, html').animate({'scrollTop':scrollValue});
    });


    $(window).scroll(function(){
        var windowScrollValue = $(this).scrollTop();
        console.log(windowScrollValue);
        if(windowScrollValue > 300){
            $('.mainCon1').addClass('on');
            if(windowScrollValue > 1100){
                $('.left-box, .right_top-box').addClass('on');
            }
        } 
    });
 


    $('.btn_family').click(function(){
        $(this).toggleClass('on');
        $('.family-list').slideToggle();
    })


    const swiper = new Swiper('.news-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        simulateTouch:false,
      
        // If we need pagination
        pagination: {
          el: '.news-slide .swiper-pagination',
          type: 'fraction',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.news-slide .swiper-button-next',
          prevEl: '.news-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.news-slide .swiper-scrollbar',
        },
      });


    
})

