let start = document.getElementById("button");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let timer = document.getElementById("timer");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let scoreDiv = document.getElementById("scoreContainer");

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
                imgSrc : "img/html.png",
                answerB : "Waikiki",
                answerC : "Lanai",
                correct : "C"
            },
            {question : "Does Hawaii observe daylight savings?",
                answerA : "Yes",
                imgSrc : "img/html.png",
                answerB : "No",
                answerC : "Sometimes",
                correct : "B"
            },
            {question : "When someone from Hawaii says the word ma-ke, what does it mean?",
                imgSrc : "img/html.png",
                answerA : "Tired",
                answerB : "Dead",
                answerC : "Single",
                correct : "B"
            },
            {question : "What types of fruit trees are commonly found throughout Hawaii?",
            imgSrc : "img/html.png",
            answerA : "Apple and Tangerine",
                answerB : "Mango and Papaya",
                answerC : "Coconut and Prune",
                correct : "B"
            },
        ];     
let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let questionTime = 10;
let TIMER;
let score = 0;
        
  function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
  }
  function renderCounter() {
    if (count <= questionTime) {
      count--;
      timer.innerHTML = count;
    } else {
      count = 0;
      if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
      } else {
        clearInterval(TIMER);
        scoreRender();
      }
    }
  } 
  function scoreRender() {
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = score;
  }
  function checkAnswer (answer) {
    if (answer == questions[runningQuestion].correct){
      score++;
    }
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    }
  start.addEventListener("click", startQuiz);  

  function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
    }


     


