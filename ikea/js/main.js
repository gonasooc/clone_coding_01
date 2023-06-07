$(function(){
    $('#header .hamburger_btn').click(function(){
        $('.m_gnb_wrap').addClass('on');
    });
    $('.m_gnb_wrap .m_gnb-close_btn').click(function(){
        $('.m_gnb_wrap').removeClass('on');
    });
});