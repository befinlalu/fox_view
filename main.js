

// document.addEventListener("DOMContentLoaded", function () {
//   var options = {
//       strings: [
//           "<span class='animated-line'>WE LOVE</span><br>" +
//           "<span class='animated-line'>ELEVATING YOUR</span><br>" +
//           "<span class='animated-line'>BRAND THROUGH</span><br>" +
//           "<span class='animated-line color-text'>INNOVATIVE IDEAS</span>"
//       ],
//       typeSpeed: 25,
//       backSpeed: 100,
//       startDelay: 100,
//       fadeOut: false,
//       fadeOutClass: "typed-fade-out",
//       showCursor: false,
//       onComplete: function () {
//           document.querySelector(".subTitle").style.opacity = 1;
//       },
//   };

//   var typed = new Typed("#animatedTextContainer", options);
// });

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
      document.querySelector(".subTitle").style.opacity = 1;
  }, 2500); // Adjust this delay to match the total animation time of your lines
});

document.addEventListener('scroll', function() {
  const tabContainer2 = document.querySelector('.tab-container2-home');
  const tabContainer1 = document.querySelector('.tab-container1-home');
  
  // Get the position of .tab-container1-home from the top of the document
  const tabContainer1Position = tabContainer1.getBoundingClientRect().top + window.scrollY;
  
  // Check if the page has been scrolled past .tab-container1-home
  if (window.scrollY > tabContainer1Position) {
      tabContainer2.style.opacity = '1'; // Make tab-container2-home visible
  } else {
      tabContainer2.style.opacity = '0'; // Hide tab-container2-home
  }
});







  window.addEventListener("scroll", function () {
    const card2 = document.querySelector(".tab-container2");
    const windowHeight = window.innerHeight;
    
    // When the scroll position reaches the top (initial position)
    if (window.scrollY <= 0) {
      card2.style.opacity = 0;  // Change opacity to 0 when at the top
      card2.style.transform = "translateY(100px)";  // Keep the element slightly translated down
    } 
    // Detect when the scroll position reaches the bottom of the first card
    else if (window.scrollY > windowHeight-100) {
      card2.style.opacity = 1;
      card2.style.transform = "translateY(0)";  // Reset position
    } 
    // Otherwise (in between)
    // else {
    //   card2.style.opacity = 1;
    //   card2.style.transform = "translateY(100px)";
    // }
  });


  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };
    const serviceID = 'service_dkwkiap';
    const templateID = 'template_v916i1r';
  
    emailjs.send(serviceID, templateID, formData)
      .then(function(response) {
        console.log("Email sent successfully!", response);
        alert("Your message has been sent successfully!");
        document.querySelector('form').reset(); // Reset the form after success
      }, function(error) {
        console.log("Failed to send email.", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  });
  
  
  