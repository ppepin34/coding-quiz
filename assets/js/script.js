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

            //if the quiz is finished before time runs out and timeLeft is set to blank, stop the interval
        } else if (timeLeft === "") {
            clearInterval(timeInterval);

            //if time runs out, stop timer, go to endQuiz
        } else if (timeLeft <= 0) {
            time.innerHTML = 0;
            clearInterval(timeInterval);
            i++;
            endQuiz();
        };
    }, 1000);
};


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
};

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
    };
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
    };
};


//end of quiz

var endQuiz = function () {
    // save timeLeft as a score

    // if (timeLeft < 0 )
    var score = timeLeft;

    // drop i to last question
    i--;
    id = i.toString();

    // hide question
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
};

var saveScore = function (event) {
    event.preventDefault();
    //create variables to store in array
    var score = document.getElementById("final-score").innerHTML;
    var initials = document.querySelector("input[name='initials']").value;

    //create object for array
    var scoreObj = {
        initials: initials,
        score: score
    };

    //add obj to array
    highScores.push(scoreObj);

    //sort array by high score
    highScores.sort((a, b) => b.score - a.score);

    //change page
    document.getElementById("form").classList.add("hidden");
    document.getElementById("form").classList.remove("visible");

    document.getElementById("high-scores").classList.add("visible");
    document.getElementById("high-scores").classList.remove("hidden");

    //generate high scores list
    var list = document.getElementById("list");

    highScores.forEach((Object) => {
        let li = document.createElement("li");
        li.innerText = initials + " - " + score;
        list.appendChild(li);
    });

    //save scores to localStorage

    localStorage.setItem("highScores", JSON.stringify(highScores));
};

//clear scores
var clearScores = function (){

    //hide highscores page
    document.getElementById("high-scores").classList.add("hidden");
    document.getElementById("high-scores").classList.remove("visible");

    //display splash
    document.getElementById("high-scores").classList.add("visible");
    document.getElementById("high-scores").classList.remove("hidden");

    //delete highscores
    highScores = []
};

//back to main page
var goBack = function (){
    //hide highscores page
    document.getElementById("high-scores").classList.add("hidden");
    document.getElementById("high-scores").classList.remove("visible");

    //display splash
    document.getElementById("high-scores").classList.add("visible");
    document.getElementById("high-scores").classList.remove("hidden");
};

// load scores on page load
var loadScores = function () {

    //get scores from localStorage
    var savedScores = localStorage.getItem("highScores");

    //convert scores from string back into an array of objects
    if (savedScores === null){
        return false;
    }

    savedScores = JSON.parse(savedScores);
};

//event listeners
document.getElementById("start-quiz").addEventListener("click", () => {
    quizStart();
    timer();
});


const answerButton = document.querySelectorAll(".answer-button");
answerButton.forEach(answerButton =>
    answerButton.addEventListener("click", answer)
);

document.getElementById("form").addEventListener("submit", saveScore);
document.getElementById("clear-scores").addEventListener("click", clearScores);
document.getElementById("go-back").addEventListener("click", goBack);

//load scores
loadScores;