// let start = document.getElementById("btn");
// let game = document.getElementById("page");
// let questionA = document.getElementById("question-row");
// let imageForQuestion = document.getElementById("questionImg");
// let answerA = document.getElementById("A");
// let answerB = document.getElementById("B");
// let answerC = document.getElementById("C");
// let timer = document.getElementById("timer-row");
// let answer = document.getElementById("answer");
// let wrong = document.getElementById("wrong-row");
// let correct = document.getElementById("correct-row")
// let gameOver = document.getElementById("game-over-row");
// var timeleft = 120;
let start = document.getElementById("start");
let quiz = document.getElementById("quiz");
let qImg = document.getElementById("questionImage");
let questions = document.getElementById("question");
let counter = document.getElementById("counter");
let timeGauge = document.getElementById("timeGauge");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let progess = document.getElementById("progress");
let scoreContainer = document.getElementById("scoreContainer");


// function hideScreen() {
//     var x = document.getElementById("button");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
// } 
          let questions = [
 
        {
                question: "What kind of pets does Val have?",
                imgSrc : "img/html.png",
                choiceA : "Turtles and Tortoises",
                choiceB : "Finches and Parrots",
                choiceC : "Cats and Dogs",
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
      
// function askTheQuestion()  {
//         let lastQuestionIndex = questions.length - 1;
//         let currentQuestionIndex = 0;
//             for (i = 0; i < questions.length -1; i++) {
//                 let q = questions[currentQuestionIndex];
                // questionA.innerHTML = "<p>" + q.question +"</p>";
                // answerA.innerHTML = q.answerA;
                // answerB.innerHTML = q.answerB;
                // answerC.innerHTML = q.answerC;
                
document.getElementById("question-row").innerHTML = "<p>" + questionA.question + "</p>";
        let    answerA.innerHTML = answerA;
         let   answerB.innerHTML = answerB;
        let     answerC.innerHTML = answerC;


                if $(document).on("click", ".option" == questions[currentQuestionIndex].correct {
                    correctanswer++
                } 
        

            };
};

            }
            else () {
                displayScore();
            }
            
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
    startTimer ()
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
