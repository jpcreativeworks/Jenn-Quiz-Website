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
ansOpt1.addEventListener("click", checkAnswer);
ansOpt2.addEventListener("click", checkAnswer);
ansOpt3.addEventListener("click", checkAnswer);
let theTimer = 0;
let timerCount = 60;
let timeScore = 0;
let timerElmt = document.querySelector(".the-timer");
let rightWrong = document.querySelector(".right-wrong");
let userScore = document.querySelector(".score-container")
let resultsBox = document.getElementById("results-box")
resultsBox.classList.add("hiddenElmt");
let saveUser = document.getElementById("saveuser");
let userInput = document.getElementById("user");
saveUser.addEventListener("click", function() {
    let userData = {
        user: userInput.value,
        score: timeScore,
        timeLeft: timerCount
    }
    localStorage.setItem("popquiz", JSON.stringify(userData));
    document.querySelector(".name-container").textContent= userInput.value
})

let startQuiz = document.querySelector(".start-quiz")
startQuiz.addEventListener("click", function () {

    leaderBoard.classList.remove("hiddenElmt");
    questionBox.classList.remove('hiddenElmt');
    startQuiz.classList.add("hiddenElmt");
    theTimer = setInterval(function() {
        timerElmt.textContent = timerCount
        if (timerCount >= 1) {
            timerCount -- 
        } else {
            timerElmt.textContent = "time up!"
            clearInterval(timerElmt);
            userScore.textContent = timeScore
        }
    },1000)
    beginQuizzing() 
})

function beginQuizzing() {
  mainQ.textContent =  questionsDB[setIndex].question;
  ansOpt1.textContent = questionsDB[setIndex].choices[0];
  ansOpt2.textContent = questionsDB[setIndex].choices[1];
  ansOpt3.innerText = questionsDB[setIndex].choices[2];

}
function checkAnswer() {
    let correctAns1 = this.getAttribute("data-index")
    console.log(correctAns1);
    if (parseInt(correctAns1) === questionsDB[setIndex].trueAnswer) {
        rightWrong.textContent = "Good Choice!";
        timeScore +=10;
    } else {
        rightWrong.textContent = "Nice Try...";
        timerCount -=10;
    }
    if (setIndex < questionsDB.length - 1) {
        setIndex ++ ;
        beginQuizzing()
    }else{
        timerElmt.textContent = "you're done!"
        clearInterval(timerElmt);  
        resultsBox.classList.remove("hiddenElmt")
        
        questionBox.classList.add('hiddenElmt');
        userScore.textContent = timeScore
    }
} 


