let scoreRender = document.getElementById('scoreContainer')
let start = document.getElementById('button');
let summitButton = document.getElementById('submit');
let timer = document.getElementById("timer");
let quizContainer = document.getElementById('quiz');

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

     


function generateTimer() {
  var timeleft = 45;
  var downloadTimer = setInterval(function(){
  document.getElementById("timer").innerHTML = "Time left: " + timeleft + " seconds";
  timeleft -= 1;
  if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("timer").innerHTML = "Finished!";
  }
  }, 1000);
}
showQuestions();
generateTimer();

}
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
          resultsContainer.innerHTML = "Correct: "  + numCorrect + "  Incorrect:" + (5-numCorrect);
    }
}

let resultsContainer = document.getElementById('results');

$("#button").click (function() {
generateQuiz();
start.style.display = "none";
quizContainer.style.display = "block";
submit.style.display = "block";
timer.style.display = "block";
});

$("#submit").click (function () {
  showResults();
  timer.style.display = "none";
  start.style.display = "none";
  quizContainer.style.display = "block";
  submit.style.display = "block";
  scoreRender.style.display = "block";
});
