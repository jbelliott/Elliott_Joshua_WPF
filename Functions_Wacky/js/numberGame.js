/*
Joshua Elliott
19 December 2013
Functions: Wacky
 */

//This is another type of number game to predict a user's age based on input

//Explain the game to the user
var gameMechanics = function(){
    alert("Write your age on a piece of paper. Then, take the first digit and multiply it by 5. \nExample: If you are 32, you will multiply the 3 by 5.");
}
gameMechanics();
//Collect user input
var numberTotal = prompt("Test");

//Function to calculate the user's age
function calcAge(ageTotal){
    var userAge = ageTotal - 6;
    return userAge;
}
var userAge = calcAge(numberTotal);

alert(userAge);
