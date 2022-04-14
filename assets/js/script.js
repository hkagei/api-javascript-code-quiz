var quizStatus = true;
var timerEl = document.querySelector("#timeLeft");
var highscore =  100;
var question1 = document.getElementById('question1');
var startbtn = document.querySelector("#start-quiz")
var currentQuestion = 0;
var answer1 = document.querySelector("#answer1");


var questions = [
    {
        question: "The condition statement if/else is enclosed with the following:",
        choices: ["Parentheses", "Curly Brackets", "Quotes", "Square Brackets"],
        answer: "Parentheses"

    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
        answer: "All of the above"

    },
    {
        question: "Commonly used datatypes include the following, except _____.",
        choices: ["Strings", "Boolean", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "A very useful tool to debug arrays is:",
        choices: ["Javascript", "Terminal/Bash", "For Loops", "Console Log"],
        answer: "For Loops"
    },
    {
        question: "Strings must be enclosed with",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        answer: "Quotes"
    },

];
// Need to create a function for startQuiz


function startQuiz(){

var startscreen = document.getElementById('start');
startscreen.setAttribute("class", "hide");

question1.removeAttribute("class");

// question1.textContent = questions[0].question;

// var question = document.getElementById("question")
// questions.textContent = "abc"

questionLoop()


};

function questionLoop() {
  if (currentQuestion < questions.length) {
    question1.textContent = questions[currentQuestion].question
    answer1.setAttribute("class");
  }
  // need an event listener for each question click onclick
}

// function that will start the quiz
startbtn.addEventListener("click", function(){
    countdown();
    startQuiz();
})
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
      }
    }, 1000);
  }

startbtn.onclick = startQuiz

//save_score.addEventListener("click", function() {})
    


var saveScore