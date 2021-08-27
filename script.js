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

let score = 0;

const displayWord = (currentWord) => {
  if (currentWord === words.length) {
    alert("Congratulations");
    location.reload();
  } else {
    document.querySelector(".jumbledWord").innerHTML = words[currentWord].jumbled;
    document.querySelector(".msg").innerText = "";
    document.querySelector("#answer").value = "";
  }
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

document
  .querySelector("#button")
  .setAttribute("onclick", "checkAnswer(words[currentWord].correct)");
