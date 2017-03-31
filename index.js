console.log(window.offset);

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
    window.jellyness = jellyValue / 400;
    document.querySelector("#jellyStat").textContent = jellyValue;
  });
  console.log(document.getElementById("jellySlider"));
  document.querySelector("#levelCount").textContent = (window.level);
  document.querySelector("#lifeCount").textContent = (window.lives);

  document.getElementById("newButton").addEventListener("click", function() {
    alert("clicked button!");
  });
  setInterval( () => {
    document.querySelector("#levelProgress").textContent = levelProgress();
    // console.log(levelProgress());
  }, 100);
})
