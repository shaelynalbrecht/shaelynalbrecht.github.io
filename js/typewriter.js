var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 1.75; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
// var i = 0;
// var txt = "Hi, I'm Shaelyn! \n \n I'm a user experience researcher and designer passionate about uncovering users' needs and creating joyful experiences. \n \nWelcome to my digital home :)";
//
//  /* The text */
// var speed = 43; /* The speed/duration of the effect in milliseconds */
//
// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("greeting").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// function setupTypewriter(t) {
//     var HTML = t.innerHTML;
//
//     t.innerHTML = "";
//
//     var cursorPosition = 0,
//         tag = "",
//         writingTag = false,
//         tagOpen = false,
//         typeSpeed = 1,
//       tempTypeSpeed = 0;
//
//     var type = function() {
//
//         if (writingTag === true) {
//             tag += HTML[cursorPosition];
//         }
//
//         if (HTML[cursorPosition] === "<") {
//             tempTypeSpeed = 0;
//             if (tagOpen) {
//                 tagOpen = false;
//                 writingTag = true;
//             } else {
//                 tag = "";
//                 tagOpen = true;
//                 writingTag = true;
//                 tag += HTML[cursorPosition];
//             }
//         }
//         if (!writingTag && tagOpen) {
//             tag.innerHTML += HTML[cursorPosition];
//         }
//         if (!writingTag && !tagOpen) {
//             if (HTML[cursorPosition] === " ") {
//                 tempTypeSpeed = 0;
//             }
//             else {
//                 tempTypeSpeed = (Math.random() * typeSpeed) + 38;
//             }
//             t.innerHTML += HTML[cursorPosition];
//         }
//         if (writingTag === true && HTML[cursorPosition] === ">") {
//             tempTypeSpeed = (Math.random() * typeSpeed) + 38;
//             writingTag = false;
//             if (tagOpen) {
//                 var newSpan = document.createElement("span");
//                 t.appendChild(newSpan);
//                 newSpan.innerHTML = tag;
//                 tag = newSpan.firstChild;
//             }
//         }
//
//         cursorPosition += 1;
//         if (cursorPosition < HTML.length - 1) {
//             setTimeout(type, tempTypeSpeed);
//         }
//
//     };
//
//     return {
//         type: type
//     };
// }
//
// var typer = document.getElementById('typewriter');
//
// typewriter = setupTypewriter(typewriter);
//
// typewriter.type();
