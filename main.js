

document.addEventListener("DOMContentLoaded", function () {
    var options = {
      strings: [
        "WE LOVE<br>ELEVATING YOUR<br>BRAND THROUGH<br><span class='color-text'>INNOVATIVE IDEAS</span>",
      ],
      typeSpeed: 25,
      backSpeed: 100,
      startDelay: 100,
      fadeOut: false,
      fadeOutClass: "typed-fade-out",
      showCursor: false,
      onComplete: function () {
        document.querySelector(".subTitle").style.opacity = 1;
      },
    };
  
    var typed = new Typed("#animatedTextContainer", options);
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
  
  