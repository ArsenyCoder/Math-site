
$(".themes-animations").on('click', function (e) {
  e.preventDefault();
  location.assign('https://youtube.com/');
});


$('#up-link').on('click',function(e) {
  e.preventDefault();
  document.getElementById("body").scrollIntoView({behavior: "smooth", block: "start"});
});


$('#modal-link').on('click',function(e) {
  e.preventDefault();
  $('#Popup').modal();
});