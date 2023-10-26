let currentQuestion = 0;
let currentanswears = 0;
showQuestion();

document
.querySelector(".scoreArea button")
.addEventListener("click", resetEvent);

function showQuestion() {
    if (questions[currentQuestion]) {
      let q = questions[currentQuestion];

let atQuestion = (questions.length / currentQuestion) * 100;

let barwidth = atQuestion;

document.querySelector('.scoreArea').style.display = "none";

document.querySelector(".questionArea").style.display = "inline";

let valQuestion = document.querySelector(".question");

