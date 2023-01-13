let slider = document.getElementById("sliderDiv");
let span = document.querySelectorAll(".dot");
let elements = document.querySelectorAll(".arrowOpenClose");
let questions = document.querySelectorAll(".question");
let hrAndAnswers = document.querySelectorAll(".hrAndAnswer");
let arrowOpenClose = document.querySelectorAll(".arrowOpenClose");
let faq = document.querySelector(".faq");

for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    let answer = this.parentElement.nextSibling.nextSibling;
    if (answer.style.display === "" || answer.style.display === "none") {
      e.stopPropagation();
      this.style.transform = "rotate(180deg)";
      answer.style.display = "block";
    } else {
      e.stopPropagation();
      this.style.transform = "rotate(0)";
      answer.style.display = "none";
    }
  };
}
for (let i = 0; i < questions.length; i++) {
  questions[i].onclick = function () {
    let answer = this.parentElement.childNodes[3];
    let arrow = this.parentElement.childNodes[1].childNodes[3];
    if (answer.style.display === "" || answer.style.display === "none") {
      arrow.style.transform = "rotate(180deg)";
      answer.style.display = "block";
      answer.style.visibility = "visible";
      answer.style.opacity = "1";
    } else {
      arrow.style.transform = "rotate(0deg)";
      answer.style.display = "none";
    }
  };
}
for (let i = 0; i < hrAndAnswers.length; i++) {
  hrAndAnswers[i].onclick = function () {
    this.style.display = "none";
    this.parentElement.childNodes[1].childNodes[3].style.transform =
      "rotate(0deg)";
  };
}

// for (let i = 0; i < span.length; i++) {
//   span[i].onclick = function () {
//     for (let j = 0; j < span.length; j++) {
//       span[j].style.background = "#CBCED6";
//     }
//     this.style.background = "blue";
//   };
// }

faq.addEventListener("click", function () {
  if (
    faq.childNodes[3].style.transform === "" ||
    faq.childNodes[3].style.transform === "rotate(180deg)"
  ) {
    for (let i = 0; i < hrAndAnswers.length; i++) {
      hrAndAnswers[i].style.display = "block";
    }
    for (let i = 0; i < arrowOpenClose.length; i++) {
      arrowOpenClose[i].style.transform = "rotate(180deg)";
    }
    faq.childNodes[3].style.transform = "rotate(0deg)";
  } else {
    for (let i = 0; i < hrAndAnswers.length; i++) {
      hrAndAnswers[i].style.display = "none";
    }
    for (let i = 0; i < arrowOpenClose.length; i++) {
      arrowOpenClose[i].style.transform = "rotate(0deg)";
    }
    faq.childNodes[3].style.transform = "rotate(180deg)";
  }
});
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

const specialOnesLarge = document.getElementById("specialOnesLarge");
const specialTwoLarge = document.getElementById("specialTwoLarge");

saveThertythree.addEventListener("click", function () {
  specialOnes.classList.remove("active");
  specialOnesLarge.classList.remove("active");
  this.classList.add("active");
});

specialOnes.addEventListener("click", function () {
  saveThertythree.classList.remove("active");
  this.classList.add("active");
});

specialOnesLarge.addEventListener("click", function () {
  saveThertythree.classList.remove("active");
  this.classList.add("active");
});

saveForty.addEventListener("click", function () {
  specialTwo.classList.remove("active");
  specialTwoLarge.classList.remove("active");
  this.classList.add("active");
});

specialTwo.addEventListener("click", function () {
  saveForty.classList.remove("active");
  this.classList.add("active");
});

specialTwoLarge.addEventListener("click", function () {
  saveForty.classList.remove("active");
  this.classList.add("active");
});
