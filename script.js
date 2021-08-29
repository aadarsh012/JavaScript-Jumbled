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

// Init

let currentWord = 0;

// Storing Answers

const answersArray = [];

let score = 0;

// Displaying Jumbled Word

const displayWord = (ansArr) => {
  if (ansArr.length === words.length) {
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

displayWord(answersArray);

// Checking for answer

const checkAnswer = (word) => {
  if (word.toLowerCase().trim() === document.querySelector("#answer").value.toLowerCase().trim()) {
    score = score + 5;
    answersArray.push(word);
    document.querySelector("#score").innerHTML = score;
    document.querySelector(".msg").innerText = "Correct Answer!!";
    document.querySelector(".msg").setAttribute("id", "correctAnswer");
    currentWord++;
    setTimeout(() => {
      displayWord(answersArray);
    }, 1000);
  } else {
    answersArray.push(word);
    document.querySelector(".msg").innerText = "Wrong Answer!!";
    document.querySelector(".msg").setAttribute("id", "wrongAnswer");
    currentWord++;
    setTimeout(() => {
      displayWord(answersArray);
    }, 1000);
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
