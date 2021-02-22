$(function(){
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
    })


    $('#main .mainCon1 ul li').mouseenter(function(){
        $(this).addClass('on').find('a').siblings().css({'filter':'brightness(60%)'});
        $(this).find('.btn_more').stop().fadeIn();
    })
    $('#main .mainCon1 ul li').mouseleave(function(){
        $(this).removeClass('on').find('a').siblings().css({'filter':'brightness(100%)'});
        $(this).find('.btn_more').stop().fadeOut();
    })


    


})


// var player = videojs("player");

// player.playlist([
//     {
//         sources: [{
//             src: '../videos/00 HPIT.mp4',
//             type: 'video/mp4'
//         }]
//     },
//     {
//         sources: [{
//             src: '../videos/00 HPIT.mp4',
//             type: 'video/mp4'
//         }]
//     },
//     {
//         sources: [{
//             src: '../videos/00 HPIT.mp4',
//             type: 'video/mp4'
//         }],
//         poster: 'http://media.w3.org/2010/05/sintel/poster.png'
//     }
// ]);

// // Play through the playlist automatically.
// player.playlist.autoadvance(0);
// player.playlist.repeat(true);