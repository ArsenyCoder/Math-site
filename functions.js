
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

    // Получаем позицию прокрутки
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Ставим нужные стили
    document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollPosition + 'px';
    document.body.style.left = '0';
    document.body.style.width = '100%';

  }


}

// 2. Расфиксация <body>
function bodyUnfixPosition() {

  if ( document.body.hasAttribute('data-body-scroll-fix') ) {

    // Получаем позицию прокрутки из атрибута
    let scrollPosition = document.body.getAttribute('data-body-scroll-fix');

    // Удаляем атрибут
    document.body.removeAttribute('data-body-scroll-fix');

    // Удаляем ненужные стили
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';

    // Прокручиваем страницу на полученное из атрибута значение
    window.scroll(0, scrollPosition);

  }

}

$('#Popup').on('show.bs.modal', function () {
  bodyFixPosition();
});

$('#Popup').on('hide.bs.modal', function () {
  bodyUnfixPosition();
});
