// set the var to be equal to the number of .drum selectors (classes) found in the HTML document.
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// this for loop adds an event listener for every selector with the .drum class. It listens for clicks on the .drum class objects (buttons) and upon a click, performs an action.

//detects button press
for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    const buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

// detects keyboard press
document.addEventListener("keypress", function (event) {

  makeSound(event.key);

  buttonAnimation(event.key);
})

function makeSound(key) {

  switch (key) {

    case "q":
      const ride = new Audio('sounds/ride.mp3');
      ride.play();
      break;

    case "w":
      const crash = new Audio('sounds/crash.mp3'); //creates an HTML audio element.
      crash.play();
      break;

    case "a":
      const kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "s":
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      const hihat = new Audio('sounds/hi-hat.mp3');
      hihat.play();
      break;

    case "h":
      const tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      const tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      const tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      const tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log();

  }
}

function buttonAnimation(currentKey) {
  //checks for the key used.
  //Because we assigned classes to our HTML elements with the intended keys used, we're going to search the DOM for those classes.
  const activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed")

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}