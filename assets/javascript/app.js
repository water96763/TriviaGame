let startGame = document.getElementById("start");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let imageForQuestion = document.getElementById("qImg");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let counter = document.getElementById("counter");
let timeGauge = document.getElementById("timeGauge");
let progress = document.getElementById("progress");
let scoreDiv = document.getElementById("scoreContainer");

let questions = [

    {

        question : "What does HTML stand for?",

        imgSrc : "img/html.png",

        choiceA : "Correct",

        choiceB : "Wrong",

        choiceC : "Wrong",

        correct : "A"

    },{

        const lastQuestion = questions.length - 1;

        let runningQuestion = 0;

        
function renderQuestion(){

    let q = questions[runningQuestion];

   

    question.innerHTML = "<p>"+ q.question +"</p>";

    qImg.innerHTML = "<img src="+ q.imgSrc +">";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
    start.addEventListener("click",startQuiz);
setInterval