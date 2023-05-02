//?How Many Paths?
window.addEventListener('load', function() {
  //On load the animation will start on .services_images class
    var elements = document.querySelectorAll('.services_images');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 1;
    }
  });