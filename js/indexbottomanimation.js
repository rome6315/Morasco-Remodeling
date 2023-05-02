//Two paths, two tests
document.addEventListener("DOMContentLoaded", function() {
    var words = ["BUILT", "DESIGNED", "DEVELOPED", "CREATED", "ENGINEERED", "MADE", "CONSTRUCTED", "CONCOCTED", "CONSTRUCTED"];
    //'words' is a set of words that will be iterated through the animation

    var rotatingWord = document.getElementById("rotating-word");
    //rotating-word is from html and is where our animation will take place

    rotatingWord.classList.add("rotating-word");
    // Add the class to the element

    var index = 0;
    setInterval(function() {
      rotatingWord.innerHTML = words[index];
      index++; // Incrementing through 'words'
      if (index == words.length) {
          index = 0;
      }
      // Will be displayed for 3.5 seconds
    }, 3500);
  });
  