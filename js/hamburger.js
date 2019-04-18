/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerFunction() {
  var x = document.getElementById("links");
  var icon = document.querySelector(".icon");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.style.flexDirection = "column";
    x.style.marginTop = "10%";
  }
}
// let mainNav = document.getElementById('links');
// let navBarToggle = document.getElementById('js-navbar-toggle');
//
// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });
