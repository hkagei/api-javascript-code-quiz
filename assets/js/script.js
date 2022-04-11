var timerEl = document.querySelector("#timeLeft")
var startQuiz = document.querySelector("#start-quiz")


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
var question1 = document.getElementById('question1');

question1.textContent = questions[0].question;

// function that will start the quiz
startQuiz.addEventListener("click", function(){
    countdown();
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
        displayMessage();
      }
    }, 1000);
  }

//save_score.addEventListener("click", function() {})
    


var saveScore