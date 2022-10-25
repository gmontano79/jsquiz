var startCard = document.querySelector("div");
var startBtn = document.getElementById("start");
var timer = document.getElementById("clock");
var container = document.getElementById("container")
var score = 0
var timeOver = document.getElementById("timeOver")


//  ********* START BUTTON  ***************
startBtn.addEventListener("click", countDown);

startBtn.addEventListener("click", function () {
  startCard.style.display = "none";
  container.style.display = "block";

})



function countDown() {

  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft;
      timeLeft--;
    } else {
      timer.textContent = "0";
      clearInterval(timeInterval);

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

  }

  indexQuestion++;
  if (indexQuestion === questions.length) {
    indexQuestion = 0;
    // document.getElementById("answer").style.display = "none"
  }
  loadQuestion(indexQuestion);
}
console.log(score);

// ***************************************************************




