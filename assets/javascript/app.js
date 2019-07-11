let startGame = document.getElementById("start");
let game = document.getElementById("game");
let question = document.getElementById("question");
let imageForQuestion = document.getElementById("qImg");
let answerA = document.getElementById("A");
let answerB = document.getElementById("B");
let answerC = document.getElementById("C");
let counter = document.getElementById("counter");
let timeGauge = document.getElementById("timeGauge");
let progress = document.getElementById("progress");
let scoreDiv = document.getElementById("scoreContainer");

let questions = [
    {   question : "According to Va, how much toilt paper does one person ue a month?",
        imgSrc : "img/html.png",
        answerA : "Correct",
        answerB : "Wrong",
        answerC : "Wrong",
        correct : "A"
    },
]      
        for (i=0; i <questionArray.length -1 , i++)
        
        
        let lastQuestionIndex = questions.length - 1;
        let currentQuestionIndex = 0;

start.addEventListener("click", startGame);

let timer;

function startGame() {
    start.style.display = "none";
    timer = setInterval(counter, 2000);
    askTheQuestion();
    quiz.style.display = "block";
}

        
function askTheQuestion(){
    let q = questions[currentQuestionIndex];
    question.innerHTML = "<p>" + q.question +"</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc +">";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    start.addEventListener("click",startGame);

    askTheQuestion();

    function counter() {
        if (currentQuestionIndex < lastQuestionIndex) {
            currentQuestionIndex++;
            askTheQuestion();

        }
    }


function checkAnswer(answer) {
    if (questions[currentQuestionIndex].correct == answer){
        score++;
    }
    if(currentQuestionIndex < lastQuestionIndex) {

    }
}
setInterval