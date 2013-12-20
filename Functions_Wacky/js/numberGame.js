/*
Joshua Elliott
19 December 2013
Functions: Wacky
 */

//This is another type of number game to predict a user's age based on input

//Explain the game to the user
var gameMechanics = function(){
    alert("Take your age")
}

//Collect user input
var numberTotal = prompt("Test");

//Function to calculate the user's age
function calcAge(ageTotal){
    var userAge = ageTotal - 6;
    return userAge;
}
var userAge = calcAge(numberTotal);

alert(userAge);
