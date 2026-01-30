var questionsArray = [
  {
    question: "Which language runs in a web browser?",
    opt1: "Java",
    opt2: "C",
    opt3: "Python",
    opt4: "JavaScript",
    correct: "opt4",
  },
  {
    question: "What does CSS stand for?",
    opt1: "Central Style Sheet",
    opt2: "Cascading Style Sheet",
    opt3: "Computer Style Sheet",
    opt4: "Creative Style Sheet",
    correct: "opt2",
  },
  {
    question: "What does HTML stand for?",
    opt1: "HyperText Markup Language",
    opt2: "HyperText Markdown Language",
    opt3: "Hyperloop Machine Language",
    opt4: "HighText Markup Language",
    correct: "opt1",
  },
  {
    question: "Which year JavaScript was launched?",
    opt1: "1996",
    opt2: "1995",
    opt3: "1994",
    opt4: "1997",
    correct: "opt2",
  },
 
  {
    question: "Which method is used to print in console?",
    opt1: "print()",
    opt2: "console.log()",
    opt3: "log.console()",
    opt4: "write()",
    correct: "opt2",
  },
  {
    question: "Which keyword declares a variable?",
    opt1: "var",
    opt2: "let",
    opt3: "const",
    opt4: "All of these",
    correct: "opt4",
  },
  {
    question: "Which operator compares value & type?",
    opt1: "=",
    opt2: "==",
    opt3: "===",
    opt4: "!=",
    correct: "opt3",
  },
  {
    question: "Which function runs on button click?",
    opt1: "onClick",
    opt2: "click()",
    opt3: "addEventListener",
    opt4: "hover()",
    correct: "opt3",
  },
  {
    question: "Which keyWord is used to declare a constant variable in JavaScript",
    opt1: "var",
    opt2: "let",
    opt3: "const",
    opt4: "static",
     correct: "opt3",
  },
  {
question: "Which method is used to add an element at the end of an array in JavaScript?",
opt1: "push()",
opt2: "pop()",
opt3: "shift()",
opt4: "unshift()",
correct: "opt1",
  },
];

var question_number_element = document.getElementById("question-number");
var question_txt_element = document.getElementById("question-txt");
var option_1_element = document.getElementById("option1");
var option_2_element = document.getElementById("option2");
var option_3_element = document.getElementById("option3");
var option_4_element = document.getElementById("option4");
var next_button = document.getElementById("next-button");
var time_element = document.getElementById("timer");

var current_question_number = 0;
var score = 0;
var timerInterval;
const total_time = 10;
var sec = total_time;

function startTimer() {
  clearInterval(timerInterval);
  sec = total_time;
  time_element.innerHTML = `⏳ ${sec}s`;

  timerInterval = setInterval(() => {
    sec--;
    time_element.innerHTML = `⏳ ${sec}s`;

    if (sec === 0) {
      clearInterval(timerInterval);
      current_question_number++;
      showQuestion();
    }
  }, 1000);
}

function showQuestion() {
  if (current_question_number >= questionsArray.length) {
    goToResultPage();
    return;
  }

  document
    .querySelectorAll("input[name='opt']")
    .forEach((el) => (el.checked = false));

  var q = questionsArray[current_question_number];
  question_number_element.innerHTML = current_question_number + 1 + ".";
  question_txt_element.innerHTML = q.question;
  option_1_element.innerHTML = q.opt1;
  option_2_element.innerHTML = q.opt2;
  option_3_element.innerHTML = q.opt3;
  option_4_element.innerHTML = q.opt4;

  startTimer();
}

next_button.addEventListener("click", () => {
  var selectedOption = document.querySelector("input[name='opt']:checked");

  if (selectedOption) {
    if (selectedOption.id === questionsArray[current_question_number].correct) {
      score++;
    }
  }

  current_question_number++;
  showQuestion();
});

function goToResultPage() {
  localStorage.setItem("score", `${score} / ${questionsArray.length}`);
  window.location.href = "resultPage.html";
}

showQuestion();
