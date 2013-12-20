/*
Joshua Elliott
19 December 2013
Functions: Wacky
 */

//This is another type of number game to predict a user's age based on input

//Explain the game to the user
var gameMechanics = function(){  //Anonymous function to quickly explain the game
    alert("Write your age on a piece of paper. Then, take the first digit and multiply it by 5. \nExample: If you are 32, you will multiply the 3 by 5.");
    alert("Now, add 3 to that figure and then double it.");
}
gameMechanics();

//Collect user input
var numberTotal = prompt("Finally, add the second number in your age to the total and type it below. \nExample: If you are 32, you would add 2 to your running total");
if (numberTotal > 150 || numberTotal < 6){  //Conditional check for user information within a valid range.
    numberTotal = prompt("Your age cannot fall below 0 or exceed 150. Please re-enter your total."); //Reprompt user for number if outside of range
}

//Function to calculate the user's age
function calcAge(ageTotal){
    var userAge = ageTotal - 6;
    return userAge;
}
var userAge = calcAge(numberTotal); //Call Function to calculate user's age

alert("Based on your result, you are " + userAge + " years old.");  //Output to guess the user's age
