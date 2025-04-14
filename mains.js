let count = 0;
let pressed = false;
// Executes the code when the document has been loaded.
$(document).ready(function () {
  // Is loaded/called upon load and then calls most other functions.
  function load() {
    alert("The website has loaded!.");
    $("body").css("background-color", "grey");

    // Allows any element in the body and not in the .not() to fade when clicked on.
    $("div *")
      .not("#showHidden, #toggleAnimation, #startFade, #resetFade, #stopFade")
      .click(function (e) {
        $(this).fadeOut(1500);
        // Prevents all elements in a div to fade when clicked on.
        e.stopPropagation();
      });

    // Fade's all the elements back in.
    $("#showHidden").click(function () {
      $("div *").fadeIn(800);
    });

    dropDownAnimation();
    changeFont("#ourFood");
  }
  load();
});

// Three functions each for an image to fade, reset fade and stop fade animation.
function fadingImage(type) {
  // Fades out the image over 3 seconds.
  if (type === 1) {
    $("#fadingImage").fadeOut(3000);
    // Fades in the image over 3 seconds.
  } else if (type === 2) {
    $("#fadingImage").fadeIn(3000);
    // Stops the fading animation midway.
  } else if (type === 3) {
    $("#fadingImage").stop();
  }
}

// Allows a specified element to show and hide it's list/items when hovered over.
function dropDownAnimation() {
  jQuery(".drop-down").hover(
    function () {
      // Slides the list items down when .drop-down is hovered over.
      $(this).children(".drop").stop(true, true).slideDown(500);
    },
    function () {
      // Slides the list items back up when .drop-down is hovered over.
      $(this).children(".drop").stop(true, false).slideUp(500);
    }
  );
}

// Changes the font of an element depending on the y location of the mouse.
function changeFont(id) {
  let lastMouseY = 0;
  $("body").mousemove(function (e) {
    let currentY = e.clientY;
    // Checks if the current mouse y position is larger than previous.
    if (currentY > lastMouseY) {
      // Changes the style of the text in the element
      $(id)
        .css("color", "purple")
        .css("text-decoration", "underline")
        .css("font-style", "normal");
    }
    // Checks if previous mouse y position is larger than currentY.
    if (currentY < lastMouseY) {
      // Changes the style of the text in the element
      $(id)
        .css("color", "blue")
        .css("text-decoration", "none")
        .css("font-style", "italic");
    }

    // Sets the currently checked mouse y to the last mouse y.
    lastMouseY = currentY;
  });
}

// Moves elements left and right like a chain and changes the background color repeatedly.
function chainAnimation() {
  let chainLeft = $(".chainLeft");
  let chainRight = $(".chainRight");
  // Resets the elements back to their original position
  // and changes the background color back if pressed is false.
  if (!pressed) {
    chainRight.css("transform", "translateX(0px)");
    chainLeft.css("transform", "translateX(0px)");
    $("body").css("background-color", "grey");
    return;
  }

  count++;

  // Loops through each count changing the position of each element as well as the background
  // color with the class names .chainLeft and .chainRight every 200 milliseconds.
  switch (count) {
    case 1:
      chainRight.css("transform", "translateX(-10px)");
      chainLeft.css("transform", "translateX(10px)");
      break;
    case 2:
      chainRight.css("transform", "translateX(-20px)");
      chainLeft.css("transform", "translateX(20px)");
      break;
    case 3:
      chainRight.css("transform", "translateX(-30px)");
      chainLeft.css("transform", "translateX(30px)");
      $("body").css("background-color", "red");
      break;
    case 4:
      chainRight.css("transform", "translateX(-40px)");
      chainLeft.css("transform", "translateX(40px)");
      break;
    case 5:
      chainRight.css("transform", "translateX(-30px)");
      chainLeft.css("transform", "translateX(30px)");
      break;
    case 6:
      chainRight.css("transform", "translateX(-20px)");
      chainLeft.css("transform", "translateX(20px)");
      break;
    case 7:
      chainRight.css("transform", "translateX(-10px)");
      chainLeft.css("transform", "translateX(10px)");
      break;
    case 8:
      chainRight.css("transform", "translateX(0px)");
      chainLeft.css("transform", "translateX(0px)");
      $("body").css("background-color", "green");
      break;
    case 9:
      chainLeft.css("transform", "translateX(-10px)");
      chainRight.css("transform", "translateX(10px)");
      break;
    case 10:
      chainLeft.css("transform", "translateX(-20px)");
      chainRight.css("transform", "translateX(20px)");
      break;
    case 11:
      chainLeft.css("transform", "translateX(-30px)");
      chainRight.css("transform", "translateX(30px)");
      break;
    case 12:
      chainLeft.css("transform", "translateX(-40px)");
      chainRight.css("transform", "translateX(40px)");
      break;
    case 13:
      chainLeft.css("transform", "translateX(-30px)");
      chainRight.css("transform", "translateX(30px)");
      break;
    case 14:
      chainLeft.css("transform", "translateX(-20px)");
      chainRight.css("transform", "translateX(20px)");
      $("body").css("background-color", "blue");
      break;
    case 15:
      chainLeft.css("transform", "translateX(-10px)");
      chainRight.css("transform", "translateX(10px)");
      break;
    case 16:
      chainLeft.css("transform", "translateX(0px)");
      chainRight.css("transform", "translateX(0px)");
      count = 0;
      break;
  }
  if (pressed) {
    // Loops the animation as long as pressed is true.
    setTimeout(chainAnimation, 200);
  }
}

// Toggles the chainAnimation() class.
function buttonPress() {
  pressed = !pressed;
  console.log("Animation started: ", pressed);

  // Calls the chainAnimation class to start the animation
  // when pressed is true.
  if (pressed) {
    chainAnimation();
  }
}
