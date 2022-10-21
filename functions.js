
$(".themes-animations").on('click', function (e) {
  e.preventDefault();
  location.assign('https://youtube.com/');
});


$("#up-link").click(function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: 0 },1500);
});

$('#modal-link').on('click',function(e) {
  $('#Popup').modal();
});

$('#about-me-link').on('click',function(e) {
  e.preventDefault();
  location.assign('about.html');
});

$('#open-video').on('click',function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: $('#main-video-container').offset().top - ($(window).height() - $('#main-video-container').height()) / 2},1500);
  window.setTimeout(OpenMainVideo, 1500);
});

$('#open-map-popup').on('click',function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: $('#main-map-id').offset().top - ($(window).height() - $('#main-map-id').height()) / 2},650);
});


$('#about-me-id-link').on('click',function(e) {
  e.preventDefault();
  location.assign('about.html');
});


$('#little-about-me-is').on('click',function(e) {
  e.preventDefault();
  alert('Я-репетитор');
});


var body = document.getElementsByTagName('body')[0];
var bodyScrollTop = null;
var locked = false;

function lockScroll(){
  if (!locked) {
    bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    body.classList.add('scroll-locked');
    body.style.top = `-${bodyScrollTop}px`;
    locked = true;
  };
}
function unlockScroll(){
  if (locked) {
    body.classList.remove('scroll-locked');
    body.style.top = null;
    window.scrollTo(0, bodyScrollTop);
    locked = false;
  }
}

$('#Popup').on('hidden.bs.modal', function (e) {
  unlockScroll();


$('#Popup').on('shown.bs.modal', function (e) {
  lockScroll();
});