
$(".themes-animations").on('click', function (e) {
  e.preventDefault();
  location.assign('https://youtube.com/');
});


$("#up-link").click(function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: 0 },1200);
});

$('#modal-link').on('click',function(e) {
  $('body,html').animate({ scrollTop: $('#registration-card').offset().top - $('#nav').height() - ($(window).height() - $('#registration-card').height() - $('#nav').height() / 2) / 2},1500);
});

$('#about-me-link').on('click',function(e) {
  e.preventDefault();
  location.assign('about.html');
});

$('#open-video').on('click',function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: $('#main-video-container').offset().top - $('#nav').height() - 10 - ($(window).height() - $('#main-video-container').height() - $('#nav').height()) / 2},1500);
  window.setTimeout(OpenMainVideo, 1800);
});


$('#open-map-popup').on('click',function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: $('#registration-card').offset().top - $('#nav').height() - ($(window).height() - $('#registration-card').height() - $('#nav').height() / 2) / 2},1500);
});

$('#about-me-id-link').on('click',function(e) {
  e.preventDefault();
  location.assign('about.html');
});

$('#little-about-me-is').on('click',function(e) {
  e.preventDefault();
  alert('Я-репетитор');
});


$('#open-about-popup').on('click',function(e) {
    alert($('#nav').height());
});