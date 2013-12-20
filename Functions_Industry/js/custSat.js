/*
Joshua Elliott
19 December 2013
Functions: Industry
 */

//This script will help calculate customer satisfaction ratings in 3 categories

//User input for results provided
var scoreAccuracy = prompt("Please enter your accuracy score (0-10)");
if (scoreAccuracy < 0){
    scoreAccuracy = 0;
}else if (scoreAccuracy > 10){
    scoreAccuracy = prompt("Value outside of the range. Please re-enter (0-10)", 10);
    if (scoreAccuracy > 10){
        scoreAccuracy = 10;
    }
}

var scoreQuality = prompt("Please enter your quality score (0-10)");
if (scoreQuality < 0){
    scoreQuality = 0;
}else if (scoreQuality > 10){
    scoreQuality = prompt("Value outside of the range. Please re-enter (0-10)", 10);
    if (scoreQuality > 10){
        scoreQuality = 10;
    }
}

var scoreHospitality = prompt("Please enter your hospitality score (0-10)");
if (scoreHospitality < 0){
    scoreHospitality = 0;
}else if (scoreHospitality > 10){
    scoreHospitality = prompt("Value outside of the range. Please re-enter (0-10)", 10);
    if (scoreHospitality > 10){
        scoreHospitality = 10;
    }
}

//Function to calculate scores
function guestCheck(acc, qual, hosp){
    var totalScore = Number(acc) + Number(qual) + Number(hosp);
    return totalScore;
}

//Call Function
var totalScore = guestCheck(scoreAccuracy, scoreQuality, scoreHospitality);
var avgScore = totalScore / 3;

//Return results to user
alert("Your customer rating is " + avgScore + " out of 10.");

(avgScore == 10) ? console.log("Nice! A perfect score!"): console.log("Always room to grow.");

