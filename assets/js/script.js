var quizStatus = true;
var timerEl = document.querySelector("#timeLeft");
var highscore =  100;
var question = document.querySelector('#question');
var scoreContainer = document.querySelector('#score');
var mainDiv = document.querySelector('#mainDiv');
var results = document.querySelector('#results');
var resultScore = document.querySelector('#resultScore');
var enterInitials = document.querySelector("#enterInitials")
var saveScore = document.querySelector('#saveScore');
var clearScores = document.querySelector('#clearScores');
var buttonContainer = document.querySelector(".buttonContainer");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var startbtn = document.querySelector("#start-quiz")
var restartbtn = document.querySelector("#restart-quiz")
var currentQuestion = 0;
var score = 0;
var timeLeft = 45;
var timeInterval;

var questions = [{
  question: "The condition statement if/else is enclosed with the following:",
  choices: ["Parentheses", "Curly Brackets", "Quotes", "Square Brackets"],
  answer: 0
}, {
  question: "Arrays in JavaScript can be used to store _____.",
  choices: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
  answer: 3
}, {
  question: "Commonly used datatypes include the following, except _____.",
  choices: ["Strings", "Boolean", "Alerts", "Numbers"],
  answer: 2
}, {
  question: "A very useful tool to debug arrays is:",
  choices: ["Javascript", "Terminal/Bash", "For Loops", "Console Log"],
  answer: 2
}, {
  question: "Strings must be enclosed with",
  choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
  answer: 2
}];

function setQuestion(n) {
  question.textContent = questions[n].question;
  
  answer1.textContent = questions[n].choices[0];
  answer2.textContent = questions[n].choices[1];
  answer3.textContent = questions[n].choices[2];
  answer4.textContent = questions[n].choices[3];
}

function checkAnswer(answer) {
  console.log(`currentQuestion: ${currentQuestion}, correctAnswer: ${questions[currentQuestion].answer}, givenAnswer: ${answer}`)
  if (questions[currentQuestion].answer == answer) {
    score++;
    scoreContainer.textContent = score;
  } else {
    timeLeft -= 5;
  }
  if (currentQuestion == questions.length-1) { scoreQuiz(); }
  else {
    currentQuestion++;
    setQuestion(currentQuestion);
  }
}


function scoreQuiz() {
  question.textContent = '';
  clearInterval(timeInterval);
  document.getElementById('mainDiv').style.display = "none";
  document.getElementById('results').style.display = "flex";

  resultScore.textContent = score;
  populateScores();
}

function startQuiz() {

  answer1.addEventListener("click", function() {
    if (currentQuestion < questions.length) { checkAnswer(0); }
    else { scoreQuiz(); }
  });
  answer2.addEventListener("click", function() {
    if (currentQuestion < questions.length) { checkAnswer(1); }
    else { scoreQuiz(); }
  });
  answer3.addEventListener("click", function() {
    if (currentQuestion < questions.length) { checkAnswer(2); }
    else { scoreQuiz(); }
  });
  answer4.addEventListener("click", function() {
    if (currentQuestion < questions.length) { checkAnswer(3); }
    else { scoreQuiz(); }
  });

}


function countdown() {
  

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
      scoreQuiz();
    }
  }, 1000);
}

// Need to create a function for startQuiz
// function that will start the quiz
startbtn.addEventListener("click", function() {
  currentQuestion = 0;
  score = 0;
  scoreContainer.textContent = "0";
  // this removes the hideElement class from the buttonContainer when the quiz starts and shows the buttons
  buttonContainer.classList.remove("hideElement");
  startbtn.classList.add("hideElement");
  setQuestion(currentQuestion);
  countdown();
  startQuiz();
});
restartbtn.addEventListener("click", function() {
  window.location.reload();
});

function populateScores() {
  var highScores = localStorage.getItem("highScores");
  if (highScores) highScores = highScores.split(",").map(x => x.split(":"));
  var table = document.getElementById('highScores').getElementsByTagName('tbody')[0];

  // // this empties the table
  // table.innerHTML = table.rows[0].innerHTML;
  table.innerHTML = "";

  for(var i = 0; i < highScores.length; i++) {
    var row = table.insertRow();
    row.innerHTML = `<th>${highScores[i][0]}</th><td>${highScores[i][1]}</td>`;
  }
}

function submitScore(initials, value) {
  if (localStorage.getItem("highScores") == "") {
    localStorage.setItem("highScores", initials + ":" + value);
  }
  else {
    localStorage.setItem("highScores", localStorage.getItem("highScores") + "," +  initials + ":" + value);

    // keep scores sorted by highest first, and only keep the top 5
    var highScores = localStorage.getItem("highScores").split(",").map(x => x.split(":"));
    highScores = highScores.sort(function(a, b) {return b[1] - a[1]});
    highScores = highScores.slice(0, 5);
    localStorage.setItem("highScores", highScores.map(x => x.join(":")).join(","));
  }
  populateScores();
}

saveScore.addEventListener("click", function() {
  if (enterInitials.value == "") return;
  submitScore(enterInitials.value, score);
  enterInitials.style.display = "none";
  saveScore.style.display = "none";
});
clearScores.addEventListener("click", function() {
  localStorage.setItem("highScores", "");
  alert(`Cleared!`);
  window.location.reload();
});