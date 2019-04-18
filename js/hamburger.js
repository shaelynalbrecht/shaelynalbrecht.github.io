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

window.addEventListener("resize", displayNav);


function displayNav(){
  var winWidth = window.innerWidth;
  console.log(winWidth);
  var x = document.getElementById("links");
  if (winWidth > 768){
    x.style.display = "flex";
    x.style.flexDirection = "row";
    x.style.marginTop = "0%";
  }
  else {
    x.style.display = "none";
  }
}
