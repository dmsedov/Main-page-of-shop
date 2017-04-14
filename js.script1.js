// JavaScript Document
$(function(){
$('.popular-img').height($('.popular-img').width()/1.253);
	$(window).resize(function(){
    $('.popular-img').height($('.popular-img').width()/1.253);
  });
});
$(window.onscroll=function() {
    var HeaderBg = document.querySelector('.header-page-top');
    if (HeaderBg) {
        HeaderBg.classList.add('scroll-background');
    }
});
