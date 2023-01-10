function changeLeft() {
  let leftPrice = document.getElementById("left");
  let rightPrice = document.getElementById("right");
  leftPrice.classList.add("backGreen");
  rightPrice.classList.remove("backGreen");
}
function changeRight() {
  let leftPrice = document.getElementById("left");
  let rightPrice = document.getElementById("right");
  leftPrice.classList.remove("backGreen");
  rightPrice.classList.add("backGreen");
}
