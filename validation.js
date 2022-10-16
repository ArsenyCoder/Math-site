$('.email-input-validation-control-check').on('input', function() {
  if ($('.email-input-validation-control-check').val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    $('#email-error-text-span').text('');
    $('#email-error-text-span').css('color', '');
  } else {
    $('#email-error-text-span').text('Неверный email !');
    $('#email-error-text-span').css('color', 'red');
  }
});




$('.name-input-validation-control-check').on("input",function() {
  if ($('.name-input-validation-control-check').val().match(/^[А-ЯЁ][а-яё]+$/)) {
    $('#name-error-text-span').text('');
    $('#name-error-text-span').css('color', '');
  } else {
    $('#name-error-text-span').text('Невозможное имя !');
    $('#name-error-text-span').css('color', 'red');
  }
});



$('#Send-form-button').on('click', function(e) {
  e.preventDefault();
  $.ajax({
    url: "/",
    method: "post",
    data: $('#send-form-tag').serialize(),
    success: function() {
      console.log('Done !');
    }
  })
})


$(".collapse.show").each(function () {
  $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
});

$(".collapse")
  .on("show.bs.collapse", function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  })
  .on("hide.bs.collapse", function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });