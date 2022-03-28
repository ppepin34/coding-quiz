// define any constants/ global variables
var time = document.getElementById("time");
var timeLeft = "";
var highScores = [];
var i = 1;
console.log(i);

var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
        time.innerHTML = timeLeft;
        timeLeft--;
    } else {
        time.innerHTML = 0;
        clearInterval(timeInterval);
        endQuiz();
    };
}, 1000)

//timer start
var timer = function () {
    timeLeft = 74;

    //runs var timeLeft through countdown
    timeInterval();    
}


//beginning quiz
var quizStart = function () {
    //debugger
    //change html to new format, begin timer
    var splash = document.getElementById("splash")
    splash.classList.add("hidden");
    splash.classList.remove("visible");

    var quiz = document.getElementById("1")
    quiz.classList.remove("hidden");
    quiz.classList.add("visible");
}

// to get next question
var newQuestion = function () {

    console.log(i);

    //define variable for this question by using i
    id = i.toString();

    var thisQuestion = document.getElementById(id);

    //change current question to hidden
    thisQuestion.classList.add("hidden");
    thisQuestion.classList.remove("visible");

    //iterate i
    i++;

    if (i > 5) {
        endQuiz();
        return;
    }
    else {
        id = i.toString();
        var nextQuestion = document.getElementById(id);
        //change next question to visible
        nextQuestion.classList.add("visible");
        nextQuestion.classList.remove("hidden");
    }
};

var answer = function () {

    console.log("click")
    // right answer
    if (event.target.value === "correct") {
        //move to next question
        newQuestion();
    }
    else {
        // wrong answer
        //subtract from timer
        timeLeft = timeLeft - 10;

        //move to next question
        newQuestion();

        console.log(timeLeft);
    }

}


//end of quiz

function endQuiz() {
    // save timeLeft as a score
    var score = timeLeft;
    score.toString()

    // hide question
    // drop i to last question
    i--;
    id = i.toString();

    var thisQuestion = document.getElementById(id);
    console.log(thisQuestion);
    thisQuestion.classList.add("hidden");
    thisQuestion.classList.remove("visible");
    // display form

    var form = document.getElementById("form");
    form.classList.add("visible");
    form.classList.remove("hidden");

    //display score 
    var finalScore = document.getElementById("final-score");
    finalScore.innerHTML(score);
    //blank timeLeft
    timeLeft = "";

    //stop timer?
    clearInterval(timeInterval);

    //reset i
    i = 1;
}


//save timer state
//form for saving scores

//event listeners--- these go somewhere
document.getElementById("start-quiz").addEventListener("click", () => {
    quizStart();
    timer();
});

const answerButton = document.querySelectorAll(".answer-button");
answerButton.forEach(answerButton =>
    answerButton.addEventListener("click", answer)
);
//save scores
//order high to low
//maybe save top 10 only?
    // ol -> save index positions 0-9
//delete scores