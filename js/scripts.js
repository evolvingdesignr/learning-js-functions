// const testWrapper = document.querySelector(".test-wrapper");
// const testArea = document.querySelector("#test-area");
// const originText = document.querySelector("#origin-text p").innerHTML;
// const resetButton = document.querySelector("#reset");
// const theTimer = document.querySelector(".timer");

const ballAnimate = document.getElementById("ballAnimate");
const promptColor = document.getElementById("promptColor");
const promptDemo  = document.getElementById("promptDemo");
const theResult   = document.getElementById("result")

// Set the default ball color:

function ballInfo(ballColor) {
  // ES6 Way
  // console.log(`The color of the ball is ${ballColor}`);

  //ES5
  // console.log("The color of the ball is " + ballColor);

  ballAnimate.style.backgroundColor = ballColor;
  promptColor.innerHTML = ballColor;
}

// Start the ball animation:

function myMove() {
  var elem = ballAnimate;
  var pos = 0;
  var interval = setInterval(frame, 10);

  function frame() {
    if (pos == 300) {
      clearInterval(interval);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

// Run an alert promp to change the ball color:
function ballChangeColor() {
  var txt;
  var color = prompt("Change the color of the ball:", "[What color?]");
  if (color == null || color == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello, you changed the color of the ball to " + color;
  }
  promptDemo.innerHTML = txt;
  console.log("You changed it to " + color);
  ballInfo(color);
}

// Use a standard input to change the ball color:

function ballChangeColorForm() {
  var txt;
  var formColor = document.getElementById("fcolor").value;
  // theResult.innerHTML = document.getElementById('fcolor').value + " ";
  if (formColor == null || formColor == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "You chose the color:  " + formColor;
  }
  theResult.innerHTML = txt;
  console.log(document.getElementById("fcolor").value);

  ballInfo(formColor);
}

// Reset everything:
function myReset() {
  ballAnimate.style.left = "0";
  ballAnimate.style.top = "0";
  promptDemo.innerHTML = "";
  theResult.innerHTML = "";
  ballInfo("red")
}

// Event listeners for keyboard input and the reset button:

// Run your functions:
ballInfo("red");
