function openPopup() {
  document.getElementById("pContainer").style.display = "block";
  $('#pContainer').modal('show'); // Open the modal
}

// Function to close the popup
function closePopup() {
document.getElementById("pContainer").style.display = "none";
}
 // Function to toggle the navbar
 function toggleNav() {
    var navWidth = document.getElementById("mySidenav").style.width;
    if (navWidth === "200px") {
        closeNav();
    } else {
        openNav();
    }
}

// Function to open the navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.querySelector(".openbtn").style.backgroundColor = "transparent"; // Set button background transparent
}

// Function to close the navbar
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".openbtn").style.backgroundColor = "#111"; // Restore button background color
}
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scrolling and check if element is in viewport
  function handleScroll() {
    const elements = document.querySelectorAll('.text-animation');
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate'); // Add class to trigger animation
      }
    });
  }
  
  // Add event listener for scrolling
  document.addEventListener('scroll', handleScroll);
  
  // Initial check for elements in viewport when the page loads
  document.addEventListener('DOMContentLoaded', handleScroll);
  // Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
