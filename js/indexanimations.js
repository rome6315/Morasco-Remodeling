//two paths, two tests
window.addEventListener('scroll', function() {
  //On scrolling to the image, the animation will start on .daddy-perry class
  var element = document.querySelector('.daddy-perry');
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.style.opacity = 1;
  }
});

