// define any constants/ global variables
var time = document.getElementById("time");
var timeLeft = "";
var highScores = [];
// var answerButton = document.getElementsByClassName("answer-button")

//timer
var timer = function () {
    timeLeft = 74;

    //runs var timeLeft through countdown
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            time.innerHTML = timeLeft;
            timeLeft--;
        } else {
            time.innerHTML = 0;
            clearInterval(timeInterval);
            //endQuiz();
        };
    }, 1000)
}

//beginning quiz
var quizStart = function () {
    //debugger
    //change html to new format, begin timer
    var splash = document.getElementById("splash")
    splash.classList.add("hidden");
    splash.classList.remove("visible");

    var quiz = document.getElementById("quiz-1")
    quiz.classList.remove("hidden");
    quiz.classList.add("visible");
}

var answer = function () {

    console.log(element.classList)
    // right answer
    if (element.classList == "correct") {
        //move to next question
        newQuestion();
        footer.appendChild(correct);
    }
    else {
        // wrong answer
        //subtract from timer
        timeLeft = timeLeft - 10;

        //move to next question
        newQuestion
        footer.appendChild(incorrect);

        console.log(timeLeft);
    }

}


// what happens when you answer a question
//document.getElementsByClassName("answers").addEventListener("click",answer)

//end of quiz

//function endQuiz()


//save timer state
//form for saving scores

//event listeners--- these go somewhere
document.getElementById("start-quiz").addEventListener("click", () => {
    quizStart();
    timer();
});

document.querySelectorAll("answer-button").forEach(element => {
    element.addEventListener("click", answer(element.classList))
});
//save scores
//order high to low
//maybe save top 10 only?
    // ol -> save index positions 0-9
//delete scores