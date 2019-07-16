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
                
                choiceA : "Turtles and Tortoises",
                choiceB : "Finches and Parrots",
                choiceC : "Cats and Dogs",
                correct : "A"
        },
            {question : "Which Hawaiian island used to supply 75% of the pineapples in the world?",
                choiceA : "Oahu",
             
                choiceB : "Waikiki",
                choiceC : "Lanai",
                correct : "C"
            },
            {question : "Does Hawaii observe daylight savings?",
                choiceA : "Yes",
               
                choiceB : "No",
                choiceC : "Sometimes",
                correct : "B"
            },
            {question : "When someone from Hawaii says the word ma-ke, what does it mean?",
             
                choiceA : "Tired",
                choiceB : "Dead",
                choiceC : "Single",
                correct : "B"
            },
            {question : "What types of fruit trees are commonly found throughout Hawaii?",
           
                choiceA : "Apple and Tangerine",
                choiceB : "Mango and Papaya",
                choiceC : "Coconut and Prune",
                correct : "B"
            },
        ];     
let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;
    
  function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = "<p>"+ q.choiceA +"</p>";
    choiceB.innerHTML = "<p>"+ q.choiceB +"</p>";
    choiceC.innerHTML = "<p>"+ q.choiceC +"</p>";
  }
  // function renderCounter() {
  //   if (count <= questionTime) {
  //     count--;
  //     timer.innerHTML = count;
  //   } else {
  //     count = 0;
  //     if (runningQuestion < lastQuestion) {
  //       runningQuestion++;
  //       renderQuestion();
  //     } else {
  //       clearInterval(TIMER);
  //       scoreRender();
  setInterval(startTimer() {count}, 1000);
  function startTimer()  {
    let count = 20;
   
      count = count--;
      document.getElementById("timer").innerHTML= count;
      if (count <= 0) { 
        clearInterval(counter);
          if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion(); 
          }
          else {
            clearInterval(counter);
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
    startTimer();
    
    }


     


