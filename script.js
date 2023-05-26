

function checkAns(){
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
    let correct = 0;

        if (question1 == "Johannes Vermeer"){
            correct++;
        }if(question2 == "Starry Night"){
            correct++;
        }if (question3 == "Leonardo da Vinci"){
            correct++;
        }if (question4 == "Sandro Botticelli"){
            correct++;
        }if (question5 == "The Kiss"){
            correct++;
        }

    let messages = ["You certainly know your art. Bob Ross is vibing!", "Almost!", "Bob Ross is disappointed",]
    let pictures = ["https://thumbs.gfycat.com/ColossalWelloffBunting-size_restricted.gif", "https://i.pinimg.com/originals/18/e1/fb/18e1fb716b6c09af02bb658787b5404c.gif", "https://i.pinimg.com/originals/36/ba/56/36ba56a006505bff552f4dcf8f4b86eb.gif"];
    let range;
        if (correct<3) {
            range=2;
        }if (correct>2 && correct<4){
            range=1;
        }if (correct >= 4){
            range=0
        }

    document.getElementById("afterSub").style.visibility ="visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("correctNum").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}





































// const startGallery = document.querySelector("#startGallery")
// const quiz = document.querySelector("#quiz")
// const question = document.querySelector("#question")
// const qImg = document.querySelector("#qImage")
// // const choices = document.querySelector("#choices")
// // const choice = document.querySelector(".choice")
// // const choiceA = document.querySelector("#a")
// // const choiceB = document.querySelector("#b")
// // const choiceC = document.querySelector("#c")
// const scorePic = document.querySelector("#scorePic")
// const nextBtn = document.querySelector("#nextBtn")
// const answerBtn = document.querySelector(".answerBtn")

// // 

// let currentQuestionIndex = 0;
// let score = 0;
// let questionCounter = 0
// let availableQuestions = []

// // 

// let questions = [
//     {
//         question: "Who painting?",
//         imgSrc: "Girl with a Pearl Earring.jpeg",
//         answers: [
//             {text:Johannes Vermeer, correct: true},
//             {text:Sandro Botticelli, correct: false},
//             {text:Vangogh, correct: false},
//             {text:Gustav Klint, correct: false},
//         ]

//     },{
//         question: "Who painting?",
//         imgSrc: "Girl with a Pearl Earring.jpeg",
//         answers: [
//             {text:Johannes Vermeer, correct: true},
//             {text:Sandro Botticelli, correct: false},
//             {text:Vangogh, correct: false},
//             {text:Gustav Klint, correct: false},
//         ]

//     },{
//         question: "Who painting?",
//         imgSrc: "Girl with a Pearl Earring.jpeg",
//         answers: [
//             {text:Johannes Vermeer, correct: true},
//             {text:Sandro Botticelli, correct: false},
//             {text:Vangogh, correct: false},
//             {text:Gustav Klint, correct: false},
//         ]

//     },{
//         question: "Who painting?",
//         imgSrc: "Girl with a Pearl Earring.jpeg",
//         answers: [
//             {text:Johannes Vermeer, correct: true},
//             {text:Sandro Botticelli, correct: false},
//             {text:Vangogh, correct: false},
//             {text:Gustav Klint, correct: false},
//         ]

//     },{
//         question: "Who painting?",
//         imgSrc: "Girl with a Pearl Earring.jpeg",
//         answers: [
//             {text:Johannes Vermeer, correct: true},
//             {text:Sandro Botticelli, correct: false},
//             {text:Vangogh, correct: false},
//             {text:Gustav Klint, correct: false},
//         ]

//     }
// ];


// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextBtn.innerHTML = "Next";
//     showQuestion();
// }
// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex]
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.
//     question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//     })
// } 

// function resetState(){
//     nextBtn.getElementsByClassName.display= "none";
//     while(answerButtons)
// }
// startQuiz()


























//
// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 5

// startGame = => {
//     questionCounter = 0
//     score = 0
//     availableQuestions = [...questions]
//     getNewQuestion()
// }

// getNewQuestion = () => {
//     if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//         localStorage.setItem('mostRecentScore', score)
//         return window.location.assign('/end.html')

//         questionCounter++
//         // progressText.innerText =`Question ${questionCounter} of ${MAX_QUESTIONS}`

//     }
// }

//












// const lastQuestion = question.length -1;
// let runningQuestion = 0;


// // startGalleryQuiz.style.display= "none";
// // renderQuestion();
// // quiz.style.display= "block";

// function renderProgress () {
//     for (let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         Progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//     }
// }

// startGallery.addEventListener("click", startGalleryQuiz)
// function startGalleryQuiz () {
//     startGallery.style.display = "none";
//     renderQuestion();
//     quiz.style.display = "block"
// }

// function renderQuestion() {
//     let q = questions[runningQuestion];
//     qImg.innerHTML="<img src= "+q.imgsrc +">";
//     question.innerHTML="<p>" + q.question + "</p>";
//     choiceA.innerHTML=q.choiceA;
//     choiceB.innerHTML=q.choiceB;
//     choiceC.innerHTML=q.choiceC;
// }


// let score = 0;
// function checkAnswer (answer){
//     if (answer == questions[runningQuestion].correct == answer){
//         score ++;
//     }
//     if (runningQuestionIndex<lastQuestionIndex){
//         runningQuestionIndex++;
//         questionRender();
//     }else{
//         scoreRender();
//     }
// }


// function scoreRender(){
//     scorePic.style.display="block";
//     let scorePercent= math.round(100* score/question.length);
//     let img= (scorePercent>=80)? "weather background.jpeg" :
//         img= (scorePercent>=60)? "weather background.jpeg" :
//         img= (scorePercent>=40)? "weather background.jpeg" :
//         img= (scorePercent>=20)? "weather background.jpeg" : "weather background.jpeg";
//     scorePic.innerHTML= "img src= " + img + " ><p> " + scorePercent " + " %</p>"
// }

// console.log ("working")
// const nextBtn = document.querySelector("#nextBtn")
// const userScore = document.querySelector("#user-score")
// const question = document.querySelector("#question")

// let currentQuestion = 0;
// let score = 0;

// let questions = [
//         {
//             question: "Who painting?",
//             imgSrc: "Girl with a Pearl Earring.jpeg",
//             answers: [
//                 {option:Johannes Vermeer, answer: true},
//                 {option:Sandro Botticelli, answer: false},
//                 {option:Vangogh, answer: false},
//                 {option:Gustav Klint, answer: false},
//             ]
    
//         },{
//             question: "Who painting?",
//             imgSrc: "Girl with a Pearl Earring.jpeg",
//             answers: [
//                 {option:Johannes Vermeer, answer: true},
//                 {option:Sandro Botticelli, answer: false},
//                 {option:Vangogh, answer: false},
//                 {option:Gustav Klint, answer: false},
//             ]
    
//         },{
//             question: "Who painting?",
//             imgSrc: "Girl with a Pearl Earring.jpeg",
//             answers: [
//                 {option:Johannes Vermeer, answer: true},
//                 {option:Sandro Botticelli, answer: false},
//                 {option:Vangogh, answer: false},
//                 {option:Gustav Klint, answer: false},
//             ]
    
//         },{
//             question: "Who painting?",
//             imgSrc: "Girl with a Pearl Earring.jpeg",
//             answers: [
//                 {option:Johannes Vermeer, answer: true},
//                 {option:Sandro Botticelli, answer: false},
//                 {option:Vangogh, answer: false},
//                 {option:Gustav Klint, answer: false},
//             ]
    
//         },{
//             question: "Who painting?",
//             imgSrc: "Girl with a Pearl Earring.jpeg",
//             answers: [
//                 {option:Johannes Vermeer, answer: true},
//                 {option:Sandro Botticelli, answer: false},
//                 {option:Vangogh, answer: false},
//                 {option:Gustav Klint, answer: false},
//             ]
    
//         }
//     ];

//     function beginQuiz (){
//         currentQuestion = 0;
//         question.innerHTML = questions[currentQuestion].question;
//         true
//     }
