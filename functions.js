
$(".themes-animations").on('click', function (e) {
  e.preventDefault();
  location.assign('https://youtube.com/');
});


$("#up-link").click(function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: 0 },1500);
});

$('#modal-link').on('click',function(e) {
  $('body,html').animate({ scrollTop: $('#registration-card').offset().top - $('#nav').height() - ($(window).height() - $('#registration-card').height() - $('#nav').height()) / 2},1500);
});

$('#about-me-link').on('click',function(e) {
  e.preventDefault();
  location.assign('about.html');
});

$('#open-video').on('click',function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: $('#main-video-container').offset().top - $('#nav').height() - ($(window).height() - $('#main-video-container').height() - $('#nav').height()) / 2},1500);
  window.setTimeout(OpenMainVideo, 1500);
});

$('#open-map-popup').on('click',function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: $('#main-map-id').offset().top - $('#nav').height() - ($(window).height() - $('#main-map-id').height() - $('#nav').height()) / 2},650);
});

$('#about-me-id-link').on('click',function(e) {
  e.preventDefault();
  location.assign('about.html');
});

$('#little-about-me-is').on('click',function(e) {
  e.preventDefault();
  alert('Я-репетитор');
});
