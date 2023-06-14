

document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Function to scroll back to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show or hide the "scroll to top" button based on the scroll position
window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});



// script.js

function showBackground() {
  var section = document.getElementById("pagrindinis");
  section.style.backgroundColor = "red";
  section.style.opacity = "0.5";
}

function hideBackground() {
  var section = document.getElementById("pagrindinis");
  section.style.backgroundColor = "#434c5f";
  section.style.opacity = "";
}
