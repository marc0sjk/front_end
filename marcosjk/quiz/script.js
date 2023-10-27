let currentQuestion = 0;
let correctAnswers = 0;
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

document.querySelector(".questionArea").style.display = "block";

document.querySelector(".question").innerHTML = q.question;

document.querySelector(".options").innerHTML = "";

let optionsHtml;
for(i = 0; i < q.questions.length; i++) {
  optionsHtml = `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
}

document.querySelector(".options").innerHTML = optionsHtml;

    

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {

  }
}

function optionClickEvent(e) {
 let clicada = parseInt(e.target.getAttribute('data-op'))

  // Verifique qual questão foi clicada recuperando o atributo data-op. Use parseInt para formatar o atributo. Atribua o valor a uma variável.s
  
  // Se a resposta clicada foi a correta, incremente a variável correctAnswers
  if (clicada = answear) {
    correctAnswers + 1
  } else {correctAnswers = correctAnswers}
  // Incremente a variável currentQuestion
if (clicada) {
  currentQuestion + 1
}
  // Chame a função showQuestion
   showQuestion()
}

function finishQuiz() {
  // Criar variável de pontos baseado na divisão entre respostas corretas e quantidade de questões. Use a função Math.floor para arredondar.
  let pts,Math,Floor = correctAnswers / questions.length
  // Implementar condicionais para inserir mensagem e cor do placar de acordo com a pontuação.
  // Usar condicional if e condicionais <, <=, >, >=
  // Inserir a pontuação em .scorePct e o texto em .scoreText2
  // Ocultar a .questionArea e exibir a .scoreArea
  // Deixar a .progress--bar em 100%
}

function resetEvent() {
  // Redefina os valores de correctAnswers e currentQuestion para 0
  // Chame a função showQuestion
}
