
$(document).ready(function() {
let scoreCorrect = 0;
let scoreIncorrect = 0;
let unansweredQuestions = 0;
let timeLeft = 20;
let intervalID;
let questionIndex = 0;
let answered = false;
let correctAnswer;

let questions = [
                  {
                  question: "What kind of pets does Val have?",
                  
                  answer: ["Turtles and Tortoises", 
                           "Finches and Parrots",
                          "Cats and Dogs"],
                  correct: "A"
                  },
                  {question : "Which Hawaiian island used to supply 75% of the pineapples in the world?",
                  answer: ["Oahu",
                          "Waikiki",
                          "Lanai"],
                  correct : "C"
                  },
                  {question : "Does Hawaii observe daylight savings?",
                  answer : ["Yes",
                            "No",
                            "Sometimes"],
                  correct : "B"
                  },
              {question : "When someone from Hawaii says the word ma-ke, what does it mean?",
                  answer: ["Tired",
                          "Dead",
                           "Single"],
                  correct : "B"
              },
              {question : "What types of fruit trees are commonly found throughout Hawaii?",
                  answer: ["Apple and Tangerine",
                           "Mango and Papaya",
                           "Coconut and Prune"],
                  correct : "B"
              },
          ];     
    function startGame() {
        $('.start-button').remove();
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        loadQuestions();
        
     function loadQuestions() {     
          answered = false;
          timeRemaining = 20;
          intervalID = setInterval(timer, 1000);
          if (answered === false) {
              timer();
          }
          correctAnswer = questions[questionIndex].correct;
          let question = questions[questionIndex].question;
          $('.question').html(question);
              for (let i = 0; i < 2; i++) {
                let answer = questions[questionIndex].answer[i];
                $('.answers').append('<h4 class= allAnswers id=' + i + '>' + answer + '</h4>');
              }
          $("h4").click(function() {
            let id = $(this).attr('id');
                if (id === correct)  {
                  answered = true;
                  $('.question').text("Correct!");
                  correctAnswer();
                } else {
                  answered = true;
                  $('question').text("Nope, the answer is " + questions[questionIndex].answer[correct]);
                  incorrectAnswer();
                }
            }); 
 }
    function timer() {
      if (timeLeft === 0) {
        answered = true;
        clearInterval(intervalID);
        $('question').text("The answer was " + questions[questionIndex].answer[correct]);
        unanswered();
      } else if (answered === true) {
        clearInterval(intervalID);
      } else {
        timeLeft--;
        $('.timeLeft').text('Time left= ' + timeLeft);
      }
    }

    function correctAnswer() {
      scoreCorrect++;
      resetRound();
    }

    function incorrectAnswer() {
      incorrectAnswers++;
      resetRound();
    }
    function unansweredQuestions() {
      unansweredQuestions++;
      resetRound();
    }

    function resetRound() {
      $('.allAnswers').remove();
      questionIndex++;
      if (questionIndex <questions.length) {
        setTimeout(function () {
          loadQuestions();
        })
      } 
    }



// let start = document.getElementById("button");
// let quiz = document.getElementById("quiz");
// let question = document.getElementById("question");
// let timer = document.getElementById("timer");
// let choiceA = document.getElementById("A");
// let choiceB = document.getElementById("B");
// let choiceC = document.getElementById("C");
// let scoreDiv = document.getElementById("scoreContainer");
// let correct = document.getElementById("correct");
// let losses = document.getElementById("losses");
// 
// let lastQuestion = questions.length - 1;
// let runningQuestion = 0;
// let score = 0;
                    
//                     function renderQuestion() {
//                         let q = questions[runningQuestion];
//                         question.innerHTML = "<p>"+ q.question +"</p>";
//                         choiceA.innerHTML = "<p>"+ q.choiceA +"</p>";
//                         choiceB.innerHTML = "<p>"+ q.choiceB +"</p>";
//                         choiceC.innerHTML = "<p>"+ q.choiceC +"</p>";
//                     }
//   // function renderCounter() {
//   //   if (count <= questionTime) {
//   //     count--;
//   //     timer.innerHTML = count;
//   //   } else {
//   //     count = 0;
//   //     if (runningQuestion < lastQuestion) {
//   //       runningQuestion++;
//   //     } else {
//   //       clearInterval(TIMER);
//   //       scoreRender();
 
//       // // let timer = select("#timer");
//       // // timer.innerHTML= ("Time right:" + count);
      
//       // // // timer.html(timeLeft - counter);
//       // if (count <= 20) { 
//       //   count--;
//       //   timer.innerHTML= ("Time left:" + count);
//       // } else {
//       //   count = 0;
//       //   clearInterval(counter);
//       //     scoreRender();
//       // }
    
//                       let count= 20;
//                       function countdown() {
//                         setInterval(minus, 1000);
//                       }
                    
//                       start.addEventListener("click", startGame);  
                      
//                       function startGame() {
//                         startQuiz();
//                         minus();
//                       }
//                       function startQuiz() {
//                         start.style.display = "none";
//                         renderQuestion();
//                         quiz.style.display = "block";
//                         // startTimer();
//                         minus();
//                       }

//                       function minus() {
//                         // let count = 20;
//                         count--;
//                         timer.innerHTML= ("Time left: " + count);
//                         console.log(count);
//                       } 
    
//     function scoreRender() {
//       scoreDiv.style.display = "block";
//       correct.innerHTML = "Number correct= " + score;
//       losses.innerHTML = "Number incorrect=" + (5-score);
//     }
  
//     $(".answer").click(function() {

//       checkAnswer();
//     });
    
    
//     function checkAnswer (answer) {
//       if (answer == questions[runningQuestion].correct){
//         score++;
//       }
//       }
//       count = 0;
//       if (runningQuestion < lastQuestion) {
//         runningQuestion++;
//         renderQuestion();
//       }


