// console.log(document);

function levelProgress() {
  if (window.offset <= 0) {
    return "0 %"
  } else {
    return Math.floor(window.offset / 3780) + " %";
  }
};
// var p = document.querySelector("#levelProgress")
// p.addEventListener("change", function() {
//
// });
var jellyness = document.querySelector("#jellySlider");
jellyness.addEventListener("change", function() {
  var jellyValue = Number(jellyness.value);
  window.jellyness = jellyValue;
  document.querySelector("#jellyStat").textContent = jellyValue;
});

document.querySelector("#levelCount").textContent = (window.level);
document.querySelector("#lifeCount").textContent = (window.lives);
document.querySelector("#levelProgress").textContent = levelProgress();

document.getElementById("newButton").addEventListener("click", function() {
  alert("clicked button!");
});
