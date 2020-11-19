//Slideout Ad on Homepage
var slideoutAd = document.getElementById("slideout")

window.onscroll = function() {slideAd()};

function slideAd() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    slideoutAd.classList.add("slide");
  }
}
