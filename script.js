let words = [
  {
    jumbled: "tpyhno",
    correct: "python"
  },
  {
    jumbled: "ipa",
    correct: "api"
  },
  {
    jumbled: "scptrivaja",
    correct: "javascript"
  },
  {
    jumbled: "yrub",
    correct: "ruby"
  },
  {
    jumbled: "etivnaeratc",
    correct: "reactnative"
  },
  {
    jumbled: "lasca",
    correct: "scala"
  },
  {
    jumbled: "eactrsj",
    correct: "reactjs"
  }
];

let currentWord = 0;
console.log(currentWord);

let score = 0;

const displayWord = (currentWord) => {
  if (currentWord === words.length) {
    alert("Congratulations");
    location.reload();
  } else {
    document.querySelector(".jumbledWord").innerHTML = words[currentWord].jumbled;
    document.querySelector(".msg").innerText = "";
    document.querySelector("#answer").value = "";
    document.querySelector("#answer").focus();
  }

  // if (document.querySelector("#answer").value !== "") {
  //   document.querySelector("#button").setAttribute("disabled", "false");
  // } else {
  //   document.querySelector("#button").setAttribute("disabled", "true");
  // }
};
displayWord(currentWord);

const checkAnswer = (word) => {
  if (word.toLowerCase() === document.querySelector("#answer").value.toLowerCase()) {
    score = score + 5;
    document.querySelector("#score").innerHTML = score;
    document.querySelector(".msg").innerText = "Correct Answer!!";
    document.querySelector(".msg").setAttribute("id", "correctAnswer");
    currentWord++;
    // displayWord(currentWord);
    setTimeout(() => {
      displayWord(currentWord);
    }, 1000);
    console.log("correct");
  } else {
    document.querySelector(".msg").innerText = "Wrong Answer!!";
    document.querySelector(".msg").setAttribute("id", "wrongAnswer");
    currentWord++;
    setTimeout(() => {
      displayWord(currentWord);
    }, 1000);
    console.log("Incorrect");
  }
};

// Submit on Clicking the button

document
  .querySelector("#button")
  .setAttribute("onclick", "checkAnswer(words[currentWord].correct)");

// Submit on Enter key

let input = document.querySelector("#answer");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#button").click();
  }
});

// toggle Dark Mode

const container = document.querySelector(".container");
const main = document.querySelector(".main");
const toggle = document.querySelector("#toggle");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  container.classList.toggle("active");
  main.classList.toggle("active");
};


