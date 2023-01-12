let leftPrice = document.getElementById("left");
let rightPrice = document.getElementById("right");
let slider = document.getElementById("sliderDiv");
let span = document.querySelector("dot");
let elements = document.querySelectorAll(".arrowOpenClose");

for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    let answer = this.parentElement.nextSibling.nextSibling;
    console.log(answer.style.display);
    if (answer.style.display === "" || answer.style.display === "none") {
      this.style.transform = "rotate(180deg)";
      answer.style.display = "block";
    } else {
      console.log(this);
      this.style.transform = "rotate(0)";
      answer.style.display = "none";
    }
  };
}

function changeLeft() {
  leftPrice.classList.add("backGreen");
  rightPrice.classList.remove("backGreen");
}
function changeRight() {
  leftPrice.classList.remove("backGreen");
  rightPrice.classList.add("backGreen");
}

function slideItem(n) {
  if (n === 1) {
    slider.style.transform = "translate(0px, 0px)";
  } else if (n === 2) {
    slider.style.transform = "translate(-28%, 0%)";
  } else if (n === 3) {
    slider.style.transform = "translate(-60%, 0%)";
  }
}

const saveThertythree = document.getElementById("saveThertythree");
const specialOnes = document.getElementById("specialOnes");

const saveForty = document.getElementById("saveForty");
const specialTwo = document.getElementById("specialTwo");

saveThertythree.addEventListener("click", function () {
  specialOnes.classList.remove("active");
  this.classList.add("active");
});

specialOnes.addEventListener("click", function () {
  saveThertythree.classList.remove("active");
  this.classList.add("active");
});

saveForty.addEventListener("click", function () {
  specialTwo.classList.remove("active");
  this.classList.add("active");
});

specialTwo.addEventListener("click", function () {
  saveForty.classList.remove("active");
  this.classList.add("active");
});
