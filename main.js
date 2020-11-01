//Hamburger Nav Toggle
var hamburgerOpen = document.getElementById("hamburger-open-icon");
var hamburgerClose = document.getElementById("hamburger-close-icon");
var mobileNavDropdown = document.getElementById("mobile-nav-dropdown");

function openMenu() {
  hamburgerOpen.classList.toggle("hide");
  hamburgerClose.classList.toggle("hide");
  mobileNavDropdown.classList.toggle("show");
}

function closeMenu() {
  hamburgerClose.classList.toggle("hide");
  hamburgerOpen.classList.toggle("hide");
  mobileNavDropdown.classList.toggle("show");
}

hamburgerOpen.addEventListener("click", openMenu);
hamburgerClose.addEventListener("click", closeMenu);
