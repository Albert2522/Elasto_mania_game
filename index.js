var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


keyboardEvent[initMethod](
                   "keypress", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    100, // keyCodeArg : unsigned long the virtual key code, else 0
                    100 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
);

var keyboardEvent2 = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


keyboardEvent2[initMethod](
                   "keyup", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    68, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
);

function levelProgress() {
  if (window.offset.x <= 0) {
    return "0 %"
  } else {
    return Math.floor(window.offset.x / 37.80) + " %";
  }
};
// var progress = document.querySelector("#levelProgress")
// progress.addEventListener("change", function() {
//
// });
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("jellySlider").addEventListener("change", function() {

    var jellyValue = Number(document.getElementById("jellySlider").value);
    window.jellyness = jellyValue / 800 > 0.01 ? jellyValue / 800: 0.02;
    document.querySelector("#jellyStat").textContent = jellyValue;
  });

  document.getElementById("newButton").addEventListener("click", function() {
    window.new_game = true;
    window.level = 1;
  });
  document.getElementById("normalButton").addEventListener("click", function() {
    window.mode = "normal";
    window.change_mode = true;
  });

  document.getElementById("stiltsButton").addEventListener("click", function() {
    window.mode = "stilts";
    window.change_mode = true;
  });

  document.getElementById("accelerateButton").addEventListener("mousedown", function() {
    window.mouse_pressed = true;
    window.accel = true;
  });

  document.getElementById("accelerateButton").addEventListener("mouseup", function() {
    window.mouse_pressed = true;
    window.accel = false;
  });

  document.getElementById("accelerateButton").addEventListener("touchstart", function() {
    window.mouse_pressed = true;
    window.accel = true;
  });

  document.getElementById("accelerateButton").addEventListener("touchend", function() {
    window.mouse_pressed = true;
    window.accel = false;
  });

  document.getElementById("reverseButton").addEventListener("mousedown", function() {
    window.mouse_pressed = true;
    window.revcel = true;
  });

  document.getElementById("reverseButton").addEventListener("mouseup", function() {
    window.mouse_pressed = true;
    window.revcel = false;
  });

  document.getElementById("brakeButton").addEventListener("mousedown", function() {
    window.mouse_pressed = true;
    window.break = true;
  });

  document.getElementById("brakeButton").addEventListener("mouseup", function() {
    window.mouse_pressed = true;
    window.break = false;
  });

  document.getElementById("pauseButton").addEventListener("click", function() {
    window.pause = window.lives === 0 ? window.pause : !window.pause;
  });

  setInterval( () => {
    document.querySelector("#levelProgress").textContent = levelProgress();
    document.querySelector("#levelCount").textContent = (window.level);

    // document.querySelector("#lifeCount").textContent = (window.lives);

    if (window.lives === 2) {
      document.querySelector(".lifeHeart:nth-of-type(4)").style.visibility = "hidden";
    } else if (window.lives === 1) {
      document.querySelector(".lifeHeart:nth-of-type(3)").style.visibility = "hidden";
    } else if (window.lives === 0) {
      document.querySelector(".lifeHeart:nth-of-type(2)").style.visibility = "hidden";
    }

    // console.log(levelProgress());
  }, 100);
})
