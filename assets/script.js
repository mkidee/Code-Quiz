// Declaring all my variables here at the top to be used later.
var begin = document.querySelector('#start');
var leader = document.querySelector('#leader');
var timeBox = document.querySelector('#counter');
var quizBox = document.querySelector('#quizArea');
var currentQ = document.querySelector('#question');
var curSolutions = document.querySelectorAll(".solution");
var QA = 0;
var points = 0;
document.querySelector('#quizArea').style.display = "none";
document.querySelector('#leaderArea').style.display = "none";

// This array holds all the possible questions that the quiz will pull from (in order)
var questions = [
    
  {
    number: 1,
    question: "What do we name the main html file for our webpage?",
    options: ["main.html", "page.html", "index.html", "core.html"],
    answer: "index.html"
    },

  {
    number: 2,
    question: "At what integer does an array start at?",
    options: ["0", "1", "10", "100"],
    answer: "0"
    },

  {
    number: 3,
    question: "What symbol specifies you are working on an ID in CSS?",
    options: ["$", "#", ".", "*"],
    answer: "#"
    },

  {
    number: 4,
    question: "On what page do we normally store our Java Script language?",
    options: ["java.js", "js.js", "script.js", "javascript.js"],
    answer: "script.js"
    },

  {
    number: 5,
    question: "Which of the following means equal of value but not type?",
    options: ["=", "!=", "===", "=="],
    answer: "=="
    },

  {
    number: 6,
    question: "What tag is used for screen readers if an image doesn't load?",
    options: ["alt", "text", "capt", "backup"],
    answer: "alt"
    },

  {
    number: 7,
    question: "Which of the following identifies classes in CSS?",
    options: ["&", ".", "@", "^"],
    answer: "."
    }

]

// This function is how the clock pops up and functions once the start button is clicked.
function gameClock() {
    time = 90 // Set the time remaining to 90 seconds.
    // setInterval method is used to repeatedly call the function containing the if statements every loop (1000ms).
    var countdown = setInterval(function() {
      if (time < 12 && time > 8 ) {
        // displays a "Time's almost up!" warning if there is between 9 to 11 seconds left. 
        timeBox.textContent = "⚠️ Time's almost up ⚠️";
        // remove 1 (second) from time each loop of the function (every 1000ms).
        time--;
      } else if (time > 1) {
        // displays time remaining for all amounts of seconds excluding 0, 1, and 9-11.
        timeBox.textContent = '⏱️ ' + time + ' seconds remaining ⏱️';
        time--;
      } else if (time === 1) {
        // When `time` is equal to 1, rewrite to 'second' instead of 'seconds'.
        timeBox.textContent = '⚠️ ' + time + ' second remaining ⚠️';
        time--;
      } else {
        // displays "⏱️ Game over! ⏱️" once time reaches 0.
        timeBox.textContent = "⏱️ Game over! ⏱️";
        // clearInterval method cancels the previously created countdown timer.
        clearInterval(countdown);
      }
      // Sets the rate or interval of the function to 1000ms or 1 second.
    }, 1000); 
}

// This function is how the buttons are filled with each possible answer for each question
function displayQ() {
  currentQ.textContent = questions[QA].question;

  for (let r = 0; r < 4; r++){
    curSolutions[r].innerHTML = questions[QA].options[r];
  }

  Validate();

}

// Not currently functioning fully correctly
// This function should tell the user if their quiz answer is correct, and then move on to the next question.
function Validate(){
  correctSol = questions[QA].answer;
  for (let r = 0; r < 4; r++) {
    curSolutions[r].addEventListener('click', function(event) {
      if (curSolutions[r].innerHTML === correctSol) {
        alert("That is correct!")
        QA++
        points++
        displayQ();
      }
      else{
        alert("That is incorrect.")
        QA++
        points++
        displayQ();
      }
    }
    )
  }
}

// This function is when the start button is pressed, it will remove the buttons, 
//and bring the first quiz question to be answered.
function Game(){
  gameClock();
  document.querySelector('#startUp').style.display = "none";
  document.querySelector('#quizArea').style.display = "flex";
  displayQ();

}

// This function is for when the leaderboard button is pressed, it will pull up the leaderboard and remove the rest.
function Leader(){
  document.querySelector('#startUp').style.display = "none";
  document.querySelector('#leaderArea').style.display = "flex";
}


// Event listeners here at the bottom
begin.addEventListener("click", Game);
leader.addEventListener("click", Leader);

