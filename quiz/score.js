var highscore = document.getElementById("highscore");
var userInitials = document.getElementById("initials");
var highscoreForm = document.getElementById("highscoreform")
var scoreDisplay = document.getElementById("scoredisplaycon")



var recentScore =  JSON.parse(localStorage.getItem("score"));


function displayScore(){
    scoreDisplay.style.visibility="hidden"
    highscore.innerHTML = recentScore;
}

displayScore();



highscoreForm.addEventListener("submit", function(event){
    event.preventDefault();


    var highscores=[]
    var lastInput = JSON.parse(localStorage.getItem("highscores"));
    if(lastInput !== null){
       highscores = lastInput;
        
    }
    console.log(lastInput)

    var formInput = {
    initials: userInitials.value,
    score: recentScore
    }
    
    highscores.push(formInput);
    
    localStorage.setItem("highscores", JSON.stringify(highscores));

    renderScores()
});

function renderScores(){
    scoreDisplay.style.visibility="visible"
    var highscoreCon = document.querySelector(".highscorecon")
    var scoreList = document.getElementById("scorelist")
    var totalScores = JSON.parse(localStorage.getItem("highscores"));

    highscoreCon.remove() 

    for (i=0;i<totalScores.length;i++){
        var scoreItem = document.createElement("li")
        scoreItem.textContent = totalScores[i].initials + " " + " " + totalScores[i].score
        scoreList.appendChild(scoreItem)
    }

}