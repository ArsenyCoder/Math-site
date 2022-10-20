
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

function bodyFixPosition() {

    let html = document.documentElement;
    let scrollPosition = html.getAttribute('data-body-scroll-fix');;
    html.style.top = -scrollPosition + "px";
    html.classList.add("html_opened");


}

function bodyUnfixPosition() {
  let html = document.documentElement;
  let scrollPosition = html.getAttribute('data-body-scroll-fix');
  html.style.top = "";
  html.classList.remove("html_opened");
  html.style.top = "";
  window.scrollTo(0, scrollPosition);
  html.removeAttribute('data-body-scroll-fix');
}


function setPos() {
  let html = document.documentElement;
  let scrollPosition = window.pageYOffset;
  html.setAttribute('data-body-scroll-fix', scrollPosition);
}

$('#Popup').on('show.bs.modal', function () {
  setPos();
});


$('#Popup').on('shown.bs.modal', function () {
  bodyFixPosition();
});


$('#Popup').on('hidden.bs.modal', function () {
  bodyUnfixPosition();
});