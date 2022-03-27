// define any constants/ global variables
var time  = document.getElementById("time");
var timeLeft = "";
var highScores = [];

//timer
var timer = function() {
    timeLeft = 74;

    //runs var timeLeft through countdown
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            console.log(timeLeft)
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
var quizStart = function() {
    //debugger
    //change html to new format, begin timer
    var splash = document.getElementById("splash")
    splash.classList.add("hidden");
    splash.classList.remove("visible");

    var quiz = document.getElementById("quiz")
    quiz.classList.remove("hidden");
    quiz.classList.add("visible");
}
     {   

    //dynamically generate questions
    var newQuestion = function(){};

    var answer = function(){
        // right answer
        if (event.target.id ="correct"){
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
                }
            
        }


// what happens when you answer a question
//document.getElementsByClassName("answers").addEventListener("click",answer)

}
//end of quiz

//function endQuiz()


//save timer state
//form for saving scores

//event listeners--- these go somewhere
 document.getElementById("start-quiz").addEventListener("click", () => {
     quizStart();
     timer();
 });
//save scores
//order high to low
//maybe save top 10 only?
    // ol -> save index positions 0-9
//delete scores