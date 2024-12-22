
// home page js

const typedTextSpan = document.querySelector(".typed-text");


const textArray = ["Web Developer_", "Python Full Stack Developer_",];
const typingDelay = 100;
const erasingDelay = 70;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});






document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const navbar = document.querySelector(".navbar");

  toggle.addEventListener("click", function () {
      // Toggle the 'on' class for the button
      this.classList.toggle("on");

      // Slide toggle the navbar
      if (navbar.style.display === "block") {
          navbar.style.display = "none";
      } else {
          navbar.style.display = "block";
      }
  });
});