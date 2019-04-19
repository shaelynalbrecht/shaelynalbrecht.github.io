var i = 0;
var txt = 'Hello! Welcome to a website dedicated to the sport of baton twirling.';
 /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greeting").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
