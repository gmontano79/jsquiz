var startCard = document.querySelector("div");
var startBtn = document.getElementById("start");
var timer = document.getElementById("clock");
var q1 = document.getElementById("question1")

var ulEl = document.querySelectorAll("ul")

// CORRECT ANSWERS
var answers =
{
  q1: "q1a3",
  q2: "q2a2",
  q3: "q3a4",
  q4: "q4a3",
  q5: "q5a4",
}


//  ********* START BUTTON  ***************
startBtn.addEventListener("click", countDown);



startBtn.addEventListener("click", function () {
  startCard.style.display = "none";
  q1.style.display = "block";

})



function countDown() {

  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft;
      timeLeft--;
      console.log(timeLeft);
    } else {
      timer.textContent = "0";
      clearInterval(timeInterval);

    }
  }, 1000);
}

// CLICK ANSWER FOR NEXT QUESTION 
function checkAnswer() {

  if ()
}




