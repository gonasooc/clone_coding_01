$(function(){
    $('.visual-slide').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000
      });

    $('#footer .btn_wrap button').mouseover(function(){
      var tab_index_num = $(this).index();
      console.log(tab_index_num);
      $('#footer .btn_wrap button').removeClass('on');
      $(this).addClass('on');
      $('#footer .tab-list ul').hide();
      $('#footer .tab-list ul').eq(tab_index_num).show();
    });

    $('.wdna_wrap .tab li').click(function(){
      var wdna_index_num = $(this).index();
      console.log(wdna_index_num);
      $('.wdna_wrap .tab li').removeClass('on');
      $(this).addClass('on');
      $('.wdna_wrap .tab-list ul').hide();
      $('.wdna_wrap .tab-list ul').eq(wdna_index_num).show();
    });

    $('#wrap .popup_wrap1 .popup-close_btn1, .popup_wrap1 #today_close').click(function(){
      if($('.popup_wrap1 input[name=today_close]').is(':checked')){
        $('#wrap .popup_wrap1').hide();
        setCookie('wconcept', 'close', 1)
      } else {
        $('#wrap .popup_wrap1').hide();
      }
    });

    $('#wrap .popup_wrap2 .popup-close_btn2, .popup_wrap2 #today_close2').click(function(){
      if($('.popup_wrap2 input[name=today_close]').is(':checked')){
        $('#wrap .popup_wrap2').hide();
        setCookie('wconcept', 'close', 1)
      } else {
        $('#wrap .popup_wrap2').hide();
      }
    });

    if(getCookie('wconcept') == 'close'){
      $('#wrap .popup_wrap1, #wrap .popup_wrap2').hide();
    } else {
      $('#wrap .popup_wrap1, #wrap .popup_wrap2').show();
    }
});

// getCookie
function getCookie(name){
  var value=null, search=name+"=";
  if(document.cookie.length > 0){
      var offset=document.cookie.indexOf(search);
      if(offset != -1){
          offset+=search.length;
          var end=document.cookie.indexOf(";", offset);
          if(end == -1) end=document.cookie.length;
          value=unescape(document.cookie.substring(offset, end));
      }
  } return value;
}
// setCookie
function setCookie(name, value, expiredays){
  var days=10;
  if(days){
      var date=new Date(); 
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires="; expires="+date.toGMTString();
  }else{
      var expires=""; 
  }
  document.cookie=name+"="+value+expires+"; path=/";
}