const hamburgerMenu = document.querySelector(".hamburger__menu");
const navbarMenu = document.querySelector(".navbar__menu");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("clicked");
  navbarMenu.classList.toggle("is-active");
});

$(document).ready(function () {
  $(".ml").click(function () {
    let value = this.getAttribute("id").substring(2);
    let selected_ml_val = "ml" + value;
    let selected_sm_val = "sm" + value;

    for (var i = 0; i <= 3; i++) {
      let ml_val = "ml" + i;
      let sm_val = "sm" + i;

      if (selected_ml_val != ml_val) {
        $("#" + ml_val + " i").removeClass("arrow__rotate");
      } else {
        $("#" + ml_val + " i").addClass("arrow__rotate");
      }

      if (selected_sm_val != sm_val) {
        $("#" + sm_val).slideUp();
      } else {
        $("#" + sm_val).slideDown();
      }
    }
  });
});
