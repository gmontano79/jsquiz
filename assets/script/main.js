var startCard = document.querySelector("div");
var startBtn = document.getElementById("start");
var timer = document.getElementById("clock");
var container = document.getElementById("container")
var score = 0
var timeOver = document.getElementById("timeOver")
var finalScore = document.getElementById("yourscore")
var timeLeft = 60;
var newScore = document.getElementById("olhs")

//  ********* START BUTTON  ***************
startBtn.addEventListener("click", countDown);

startBtn.addEventListener("click", function () {
  startCard.style.display = "none";
  container.style.display = "block";

})
function endGame() {
  if (timeLeft === 0) {
    document.getElementById(container).style.display = "none"

  } else {
    console.log("gameover")
  }
}

// ********   TIMER FUNCTION  *****************

function countDown() {


  var timeInterval = setInterval(function () {
    timer.textContent = timeLeft;
    timeLeft--;
    if (timeLeft < 1 || indexQuestion >= questions.length) {
      timer.textContent = "0";
      clearInterval(timeInterval);
      container.style.display = "none";
      timeOver.style.display = "block";
    }
  }, 1000);
}





// ************************************************
// *******  QUESTIONS SCRIPT **********************

let indexQuestion = 0

loadQuestion(indexQuestion)


function loadQuestion(index) {
  objectQuestion = questions[index];
  options = [...objectQuestion.distractions];
  options.push(objectQuestion.answer);;
  options.sort(() => Math.random() - 0.5);
  document.getElementById("question1").innerHTML = objectQuestion.question
  document.getElementById("option1").innerHTML = options[0];
  document.getElementById("option2").innerHTML = options[1];
  document.getElementById("option3").innerHTML = options[2];
  document.getElementById("option4").innerHTML = options[3];
}

async function selectOption(index) {
  let validation = options[index] === objectQuestion.answer
  if (validation) {

    document.getElementById("answer").innerHTML = "Correct answer!"
    score++
  } else {
    document.getElementById("answer").innerHTML = "Wrong answer!"
    score--
    timeLeft -= 10;
    timer.textContent = timeLeft;
  }

  indexQuestion++;

  document.getElementById("finalscore").innerHTML = score;
  if (indexQuestion < questions.length) {
    loadQuestion(indexQuestion);
  }

}


// ***********  SUBMIT BUTTON ***********

var submitbtn = document.getElementById("submit");

function saveToLocalStorage() {

  var userInput = document.getElementById("initials").value + ": " + score;
  var highScore = []
  if (localStorage.getItem("highScore")) {
    highScore = JSON.parse(localStorage.getItem("highScore"))
  }
  highScore.push(userInput)
  localStorage.setItem("highScore", JSON.stringify(highScore))
}

submitbtn.addEventListener("click", saveToLocalStorage)


// *********** ADD TO LOCAL STORAGE ***********
function addScores() {
  newScore.innerHTML = ""
  var highScore = JSON.parse(localStorage.getItem("highScore"))
  for (i = 0; i < highScore.length; i++) {
    var newLi = document.createElement("li");
    newLi.textContent = highScore[i];
    newScore.append(newLi);
    newLi.style.backgroundColor = "grey";
    newLi.style.color = "white";
    newLi.style.marginBottom = "5px";
    newLi.style.width = "200px";

    // *********** CLEAR BUTTON ***************
    var clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", function () {
      newScore.remove(newLi[0])
    })
  }
}
addScores()

//  ************* END BUTTONS **********

var goBackBtn = document.getElementById("goback");
var hScore = document.getElementById("highscores")
var clearBtn = document.getElementById("clear");

goBackBtn.addEventListener("click", function () {
  hScore.style.display = "none";
  startCard.style.display = "block";

})

// *********** VIEW HIGH SCORE   ********

var viewHSbtn = document.getElementById("hscores");


viewHSbtn.addEventListener("click", function () {
  startCard.style.display = "none";
  timeOver.style.display = "none";
  hScore.style.display = "block";
})





