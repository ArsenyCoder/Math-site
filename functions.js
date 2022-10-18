
$(".themes-animations").on('click', function (e) {
  e.preventDefault();
  location.assign('https://youtube.com/');
});


$("#up-link").click(function(e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: 0 },1500);
});

$('#modal-link').on('click',function(e) {
  e.preventDefault();
  $('#Popup').modal();
});

$('#about-me-link').on('click',function(e) {
  e.preventDefault();
  location.assign('about.html');
});

$('#open-video-popup').on('click',function(e) {
  e.preventDefault();
  alert('Hello');
});

$('#open-map-popup').on('click',function(e) {
  e.preventDefault();
  alert('Hello !');
});

$('#Popup').on('shown.bs.modal', function (e) {
  $('#html').css('overflow','hidden');
  $('#body').css('overflow','hidden');
  $('#body').css('position','relative');
});


$('#Popup').on('hidden.bs.modal', function (e) {
  $('#html').css('overflow','visible');
  $('#body').css('overflow','visible');
  $('#body').css('position','relative');
});
