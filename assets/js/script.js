// define any constants/ global variables
var time = document.getElementById("time");
var timeLeft = "";
var highScores = [];
var i = 1;
const intialTime = 75;

//timer start
var timer = function () {
    timeLeft = intialTime - 1;

    //runs var timeLeft through countdown
    var timeInterval = setInterval(function () {
        //if timer has time left tick down
        if (timeLeft > 0) {
            time.innerHTML = timeLeft;
            timeLeft--;
        //if time runs out, stop timer, go to endQuiz
        } else if (timeLeft == 0) {
            time.innerHTML = 0;
            clearInterval(timeInterval);
            i++;
            endQuiz();
            console.log("b")
        //if the quiz is finished before time runs out and timeLeft is set to blank, stop the interval
        } else {
            clearInterval(timeInterval);
            console.log("c")
        };
    }, 1000);    
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

    time.innerHTML = intialTime;
}

// to get next question
var newQuestion = function () {

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
    }

}


//end of quiz

var endQuiz = function () {
    // save timeLeft as a score
    console.log ("calling")
    var score = timeLeft;

    // hide question
    // drop i to last question
    i--;
    id = i.toString();

    var thisQuestion = document.getElementById(id);
    thisQuestion.classList.add("hidden");
    thisQuestion.classList.remove("visible");
    // display form

    var form = document.getElementById("form");
    form.classList.add("visible");
    form.classList.remove("hidden");

    //display score 
    document.getElementById("final-score").innerHTML = score;
    //blank timeLeft
    timeLeft = "";

    //reset i
    i = 1;
}

//event listeners
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