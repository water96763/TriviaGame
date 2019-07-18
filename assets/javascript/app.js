
// $(document).ready(function() {


let scoreRender = document.getElementById('scoreContainer')
let start = document.getElementById('button');
let summitButton = document.getElementById('submit');

function generateQuiz() {
  let questions = [
    {
    question: "What kind of pets does Val have?",
    
    answers: {
            A: "Turtles and Tortoises", 
            B: "Finches and Parrots",
            C: "Cats and Dogs"
            },
    correct: "A"
    },
    {question : "Which Hawaiian island used to supply 75% of the pineapples in the world?",
    answers: {
            A: "Oahu",
            B: "Waikiki",
            C: "Lanai",
            },
    correct : "C"
    },
    {question : "Does Hawaii observe daylight savings?",
    answers: {
             A: "Yes",
             B: "No",
             C: "Sometimes",
             },
    correct : "B"
    },
{question : "When someone from Hawaii says the word ma-ke, what does it mean?",
    answers: {
            A: "Tired",
            B: "Dead",
            C: "Single",
            },
    correct : "B"
},
{question : "What types of fruit trees are commonly found throughout Hawaii?",
    answers: {
            A: "Apple and Tangerine",
            B: "Mango and Papaya",
            C: "Coconut and Prune",
            },
    correct : "B"
},
]; 

  function showQuestions(){
        let output =[];
        let answers;
        for(let i=0; i<questions.length; i++) {
          answers = [];
          for(letter in questions[i].answers) {
            answers.push(
              '<label>' + '<input type="radio" name="question' + i + '"value="' + letter + '">' + letter + ' : ' + questions[i].answers[letter] + '</label>'
            );
          }
          output.push(
            '<div class="question">' + questions[i].question + '</div>' +
            '<div class="answers">'
              + answers.join(' ') + '</div>'
          );
          }
          quizContainer.innerHTML = output.join(' ');
  }    
 
  function showResults() {
    let answerContainers = quizContainer.querySelectorAll('.answers');
    let userAnswer = '';
    let numCorrect = 0;
    for(let i=0; i<questions.length; i++){
              userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
            if(userAnswer===questions[i].correct){
              numCorrect++;
              answerContainers[i].style.color = 'lightgreen';
            }
            else{
              answerContainers[i].style.color = 'red';
            }
    }
          resultsContainer.innerHTML = "Correct: "  + numCorrect + "  Incorrect:" + (5-numCorrect);
          
  }

  showQuestions();



$("#submit").click (function () {
  showResults();
  start.style.display = "none";
  quizContainer.style.display = "block";
  submit.style.display = "block";
  scoreRender.style.display = "block";
});

}

let quizContainer = document.getElementById('quiz');

let resultsContainer = document.getElementById('results');

$("#button").click (function() {
generateQuiz();
start.style.display = "none";
quizContainer.style.display = "block";
submit.style.display = "block";
});

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
//                       function countdown() {
//                         setInterval(minus, 1000);
//                       }
    
