let userChoice;

let questionsDB = [
    {
        question: "What element of Web Coding would be considered the muscles?",
        choices: ["JavaScript", "HTML", "CSS"],
        trueAnswer: 0
    },
    {
        question: "Is the following statement print the numbers from 1 to 10 \n for(let i = 1; i <10; i++)",
        choices: [true, false, null],
        trueAnswer: 1
    },
    {
        question: "How many actual lines are there in this list? \n <ol><li>Apples, Pizza, Drycleaning</li></ol>",
        choices: ["3", "1", "2"],
        trueAnswer: 1
    }
]
let leaderBoard = document.querySelector('.leaderboard');
let questionBox = document.querySelector('.question-box');
leaderBoard.classList.add("hiddenElmt");
questionBox.classList.add('hiddenElmt');
let setIndex = 0;
let ansOpt1 = document.querySelector(".answer-opt1")
let ansOpt2 = document.querySelector(".answer-opt2")
let ansOpt3 = document.querySelector(".answer-opt3")
let mainQ = document.querySelector(".main-question")

//let mainQuestion1 = [];
//let mainAnswer1 = ["JavaScript", "HTML", "CSS"];
////let mainQuestion2 = ["Is the following statement print the numbers from 1 to 10?" <br> "for(let i = 1; i <10; i++)"];
//let mainAnswer2 = [true, false, null];
//let mainQuestion3 = ["How many actual lines are there in this list?" <br> "<ol><li>Apples, Pizza, Drycleaning</li></ol>"];
//let mainAnswer3 = ["3", "1", "2"];

let startQuiz = document.querySelector(".start-quiz")
startQuiz.addEventListener("click", function () {

    leaderBoard.classList.remove("hiddenElmt");
    questionBox.classList.remove('hiddenElmt');
    startQuiz.classList.add("hiddenElmt");
    beginQuizzing() 
})

function beginQuizzing() {
  mainQ.textContent =  questionsDB[setIndex].question;
  ansOpt1.textContent = questionsDB[setIndex].choices[0];
  ansOpt2.textContent = questionsDB[setIndex].choices[1];
  ansOpt3.innerText = questionsDB[setIndex].choices[2];

}
