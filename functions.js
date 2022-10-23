
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


$(function() {
    var $window = $(window),
        $body = $("body"),
        $modal = $(".modal"),
        scrollDistance = 0;

    $('#Popup').on("show.bs.modal", function() {
        // Get the scroll distance at the time the modal was opened
        scrollDistance = $window.scrollTop();

        // Pull the top of the body up by that amount
        $body.css("top", scrollDistance * -1);
    });

    $('#Popup').on("hidden.bs.modal", function() {
        // Remove the negative top value on the body
        $body.css("top", "");

        // Set the window's scroll position back to what it was before the modal was opened
        $window.scrollTop(scrollDistance);  
    });
});
