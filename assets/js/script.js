

var quizStatus = true;
var timerEl = document.querySelector("#timeLeft");
var highscore =  100;
var question = document.getElementById('question');
var currentScore = document.getElementById('score');
var buttonContainer = document.querySelector(".buttonContainer");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var startbtn = document.querySelector("#start-quiz")
var currentQuestion = 0;
var score = 0;

var questions = [
    {
        question: "The condition statement if/else is enclosed with the following:",
        choices: ["Parentheses", "Curly Brackets", "Quotes", "Square Brackets"],
        answer: 0
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
        answer: 3
    },
    {
        question: "Commonly used datatypes include the following, except _____.",
        choices: ["Strings", "Boolean", "Alerts", "Numbers"],
        answer: 2
    },
    {
        question: "A very useful tool to debug arrays is:",
        choices: ["Javascript", "Terminal/Bash", "For Loops", "Console Log"],
        answer: 2
    },
    {
        question: "Strings must be enclosed with",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        answer: 2
    },

];

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
    currentScore.textContent = score;
  }
  currentQuestion++;
  setQuestion(currentQuestion);
}

function scoreQuiz() {
  question.textContent = '';
  buttonContainer.classList.add("hideElement");
  alert(`You scored ${currentScore} out of ${questions.length}`);
  startbtn.textContent = "Restart Quiz"
}

function startQuiz() {
  // console.log(currentQuestion, questions.length-1)


  // setQuestion(currentQuestion)

  answer1.addEventListener("click", function() {
    if (currentQuestion < questions.length-1) {
      checkAnswer(0);
    }
    else {
      scoreQuiz();
    }
  });
  answer2.addEventListener("click", function() {
    if (currentQuestion < questions.length-1) {
      checkAnswer(1);
    }
    else {
      scoreQuiz();
    }
  });
  answer3.addEventListener("click", function() {
    if (currentQuestion < questions.length-1) {
      checkAnswer(2);
    }
    else {
      scoreQuiz();
    }
  });
  answer4.addEventListener("click", function() {
    if (currentQuestion < questions.length-1) {
      checkAnswer(3);
    }
    else {
      scoreQuiz();
    }
  });

}


function countdown() {
  var timeLeft = 45;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
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
  currentScore = 0;
  //this removes the hideElement class from the buttonContainer when the quiz starts and shows the buttons
  buttonContainer.classList.remove("hideElement");
  setQuestion(currentQuestion);
  countdown();
  startQuiz();
});

//save_score.addEventListener("click", function() {});

