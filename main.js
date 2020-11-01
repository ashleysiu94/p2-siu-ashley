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

//Desktop Nav Submenu Dropdown
var desktopSubnavDropdown = document.getElementsByClassName("subnav-container");
var about = document.getElementById("about-nav-item");
var activities = document.getElementById("activities-nav-item");

function toggleAboutMenu() {
  desktopSubnavDropdown[0].classList.toggle("show-about-desktop");
}

about.addEventListener("mouseenter", toggleAboutMenu);
about.addEventListener("mouseleave", toggleAboutMenu);


function toggleActivitiesMenu() {
  desktopSubnavDropdown[1].classList.toggle("show-activities-desktop");
}

activities.addEventListener("mouseenter", toggleActivitiesMenu);
activities.addEventListener("mouseleave", toggleActivitiesMenu);
