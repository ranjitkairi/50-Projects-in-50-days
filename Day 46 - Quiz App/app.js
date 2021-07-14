const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },

  {
    question: "What does CSS stand for?",
    a: "Cascade style sheets",
    b: "Color and style sheets",
    c: "Cascading style sheets",
    d: "None of the above",
    correct: "c",
  },

  {
    question:
      "If we want to show an Arrow as cursor, then which value we will use ?",

    a: "pointer",
    b: "default",
    C: "arrow",
    d: "arr",
    correct: "b",
  },

  {
    question:
      "Which of the following is the correct syntax for referring the external style sheet?",

    a: "<style src = example.css>",
    b: "<style src = 'example.css' >",
    c: "<stylesheet> example.css </stylesheet>",
    d: "<link rel='stylesheet' type='text/css' href='example.css'>",
    correct: "d",
  },

  {
    question: "The CSS property used to control the element's font-size is -",

    a: "text-style",
    b: "text-size",
    c: "font-size",
    d: "None of the above",

    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onClick="location.reload()">Reload</button>
        `;
    }
  }
});
