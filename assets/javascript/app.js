let start = document.getElementById("button");
let game = document.getElementById("page");
let question = document.getElementById("question-row");
let imageForQuestion = document.getElementById("questionImg");
let answerA = document.getElementById("A");
let answerB = document.getElementById("B");
let answerC = document.getElementById("C");
let timer = document.getElementById("timer-row");
let answer = document.getElementById("answer");
let gameOver = document.getElementById("game-over")
var timeleft = 120;
// function hideScreen() {
//     var x = document.getElementById("button");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
// } 
          let questions = [
            {question : "What kind of pets does Val have?",
                answerA : "Turtles and Tortoises",
                answerB : "Finches and Parrots",
                answerC : "Cats and Dogs"
                correct : "A"
            },
            {question : "Which Hawaiian island used to supply 75% of the pineapples in the world?",
                
                answerA : "Oahu",
                answerB : "Waikiki",
                answerC : "Lanai",
                correct : "C"
            },
            {question : "Does Hawaii observe daylight savings?",
               
                answerA : "Yes",
                answerB : "No",
                answerC : "Sometimes",
                correct : "B"
            },
            {question : "When someone from Hawaii says the word ma-ke, what does it mean?",
              
                answerA : "Tired",
                answerB : "Dead",
                answerC : "Single",
                correct : "B"
            },
            {question : "What types of fruit trees are commonly found throughout Hawaii?",
            
                answerA : "Apple and Tangerine",
                answerB : "Mango and Papaya",
                answerC : "Coconut and Prune",
                correct : "B"
            },
        ];     
      
function askTheQuestion()  {
        let lastQuestionIndex = questions.length - 1;
        let currentQuestionIndex = 0;
            for (i = 0; i < questions.length -1; i++) {
                let q = questions[currentQuestionIndex];
//                 question.innerHTML = "<p>" + q.question +"</p>";
//                 answerA.innerHTML = q.answerA;
//                 answerB.innerHTML = q.answerB;
//                 answerC.innerHTML = q.answerC;
//             }
//             if (currentQuestionIndex < lastQuestionIndex) {
//                 currentQuestionIndex++;
//                 askTheQuestion();
//             }
//             };

//         function checkAnswer(answer) {
//             if (questions[currentQuestionIndex].correct == answer){
//                 score++;
//             };
//             if(currentQuestionIndex < lastQuestionIndex) {
//                 score.innerHTML = "<p>" + score + "<p>";
//             };
//         };
$(document).on("click", "#button", function() {
    askTheQuestion();
    hideScreen();
  //   document.getElementById("startPage").style.visibility = "hidden";
  //   document.getElementById("activeGamePage").style.visibility ="visible";
    var downloadTimer = setInterval(function(){
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      timeleft -= 1;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished !";
      }
    }, 1000);
    });
//         askTheQuestion();
//         checkAnswer();
