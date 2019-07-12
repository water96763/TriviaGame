let start = document.getElementById("btn");
let game = document.getElementById("activeGamePage");
let question = document.getElementById("question");
let imageForQuestion = document.getElementById("questionImg");
let answerA = document.getElementById("A");
let answerB = document.getElementById("B");
let answerC = document.getElementById("C");
let timer = document.getElementById("timer");
let answer = document.getElementById("answer");
let timer;
let questions = [
    {   question : "According to Va, how much toilt paper does one person ue a month?",
        imgSrc : "img/html.png",
        answerA : "Correct",
        answerB : "Wrong",
        answerC : "Wrong",
        correct : "A"
    },
    {   question : "According to Va, how much toilt paper does one person ue a month?",
        imgSrc : "img/html.png",
        answerA : "Correct",
        answerB : "Wrong",
        answerC : "Wrong",
        correct : "A"
    },
    {   question : "According to Va, how much toilt paper does one person ue a month?",
        imgSrc : "img/html.png",
        answerA : "Correct",
        answerB : "Wrong",
        answerC : "Wrong",
        correct : "A"
    },
    {   question : "According to Va, how much toilt paper does one person ue a month?",
        imgSrc : "img/html.png",
        answerA : "Correct",
        answerB : "Wrong",
        answerC : "Wrong",
        correct : "A"
    },
    {   question : "According to Va, how much toilt paper does one person ue a month?",
        imgSrc : "img/html.png",
        answerA : "Correct",
        answerB : "Wrong",
        answerC : "Wrong",
        correct : "A"
    },
]      
        for (i = 0; i < questionArray.length -1; i++) {

        }
        
        
        let lastQuestionIndex = questions.length - 1;
        let currentQuestionIndex = 0;

start.onclick = function() {startGame()};

function startGame() {
    timer = setInterval(counter, 100);
    askTheQuestion();
 
}

        
function askTheQuestion(){
    let q = questions[currentQuestionIndex];
    question.innerHTML = "<p>" + q.question +"</p>";
    qImg.innerHTML = "<img src=" + q.imageForQuestion +">";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    start.onclick= function() {startGame};

   

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