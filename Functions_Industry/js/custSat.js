/*
Joshua Elliott
19 December 2013
Functions: Industry
 */

//This script will help calculate customer satisfaction ratings in 3 categories

//User input for results provided
var scoreAccuracy = prompt("Please enter your accuracy score (0-30)");
if (scoreAccuracy < 0){
    scoreAccuracy = 0;
}else if (scoreAccuracy > 30){
    scoreAccuracy = prompt("Value outside of the range. Please re-enter (0-30)");
    if (scoreAccuracy > 30){
        scoreAccuracy = 30;
    }
}

var scoreQuality = prompt("Please enter your quality score (0-30)");
if (scoreQuality < 0){
    scoreQuality = 0;
}else if (scoreQuality > 30){
    scoreQuality = prompt("Value outside of the range. Please re-enter (0-30)");
    if (scoreQuality > 30){
        scoreQuality = 30;
    }
}


//Static values for score targets


//