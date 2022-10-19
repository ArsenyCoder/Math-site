
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
  if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    document.body.setAttribute('data-body-scroll-fix', scrollPosition);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollPosition + 'px';
    document.body.style.left = '0';
    document.body.style.width = '100%';

  }

}

function bodyUnfixPosition() {

  if ( document.body.hasAttribute('data-body-scroll-fix') ) {

    let scrollPosition = document.body.getAttribute('data-body-scroll-fix');

    document.body.removeAttribute('data-body-scroll-fix');

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';

    window.scroll(0, scrollPosition);

  }

}


$('#Popup').on('shown.bs.modal', function () {
  bodyFixPosition();
})

$('#Popup').on('hidden.bs.modal', function () {
  bodyUnfixPosition();
})
