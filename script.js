
// home page js

const typedTextSpan = document.querySelector(".typed-text");


const textArray = ["AI/ML Developer_", "Python Full Stack Developer_",];
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

(function() {
    emailjs.init("X4WNWymq0WAwa9wvX"); // Replace with your Public Key
})();

// Form Submit Handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const serviceID = "service_rqed2jj";  // Replace with your Service ID
    const templateID = "template_o3hnuke"; // Replace with your Template ID

    // Collecting form data
    const templateParams = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        user_phno: document.getElementById("phno").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // Sending email using EmailJS
    emailjs.send(serviceID, templateID, templateParams)
        .then(response => {
            alert("Email Sent Successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset(); // Clear the form
        })
        .catch(error => {
            alert("Failed to Send Email.");
            console.error("FAILED...", error);
        });
});



/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area":1000
        }
      },
      "color": {
        "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
      },
      
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


  // expirience


  function filterExperience() {
    const value = document.getElementById("filter").value;
    const cards = document.querySelectorAll(".experience-card");
  
    cards.forEach(card => {
      const year = card.dataset.year;
      const role = card.dataset.role;
  
      if (value === "all" || value === year || value === role) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  

//   // == PRELOADER ==
//   $(window).on("load", function() {
//     setTimeout(function () {   hidePreloader();  }, 4000);
// });

// function hidePreloader() {
//    $('.spinner').fadeOut("slow")
//    $('.spinner-2').fadeIn("slow");

//    setTimeout(function () { showPreloader()   }, 3000);
// }

// function showPreloader() {
//     $('.spinner-wrapper').fadeOut(2000)
//     $('body').removeClass('pre-loading'); 
// }

// // == END PRELOADER ==


