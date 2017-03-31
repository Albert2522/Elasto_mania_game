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

document.querySelector("#levelCount").textContent = (window.level);
document.querySelector("#lifeCount").textContent = (window.lives);
document.querySelector("#levelProgress").textContent = levelProgress();
