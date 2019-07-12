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

function hideScreen() {
    var x = document.getElementById("button");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
} 

start.onclick = function() {startGame()};

function startGame() {
    timer = setInterval(counter, 100);
    askTheQuestion();
    hideScreen ();

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
        

  
let lastQuestionIndex = questions.length - 1;
let currentQuestionIndex = 0;
}

        
function askTheQuestion(){

            
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
                
        let lastQuestionIndex = questions.length - 1;
        let currentQuestionIndex = 0;
            for (i = 0; i < questions.length -1; i++) {
                let q = questions[currentQuestionIndex];
                question.innerHTML = "<p>" + q.question +"</p>";
                imageForQuestion.innerHTML = "<img src=" + q.imageForQuestion +">";
                answerA.innerHTML = q.answerA;
                answerB.innerHTML = q.answerB;
                answerC.innerHTML = q.answerC;
            };

        function counter() {
            if (currentQuestionIndex < lastQuestionIndex) {
                currentQuestionIndex++;
                askTheQuestion();
            };
        };

        function checkAnswer(answer) {
            if (questions[currentQuestionIndex].correct == answer){
                score++;
            };
            if(currentQuestionIndex < lastQuestionIndex) {
                score.innerHTML = "<p>" + score + "<p>";
            };
        };
    }