function openPopup() {
  var popup = document.getElementById("popup_id");
  popup.classList.add("active");
}


document.body.onmousedown = function deleteSettings(event) {
  if (event.target.className  == "close_popup" || event.target.className  == "popup_container active") {
      var popup = document.getElementById("popup_id");
      popup.classList.remove("active");
  }

}

function Lesson() {

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  alert(email);
  alert(password);
}
