//Joshua Elliott
//6 December 2013
//Expressions: Wacky

//This script will prompt a user for numbers, then guesses a number a user is thinking of


//User data for number game...can it guess the number you are thinking of?

alert("Welcome! Want to play a game? This script will guess a number you are thinking of!  First, we need three numbers from you.");  //Description of script
var numberGame = new Array();   //Create array function
numberGame[0] = prompt("\(1\) Please select a number from 1-10");   //Will be added to the guessed number
numberGame[1] = prompt("\(2\) Please select a number from 1-10");   //Will be subtracted from total
numberGame[2] = prompt("\(3\) Please select a number from 1-10");   //Will be added to the total

var userName = prompt("And finally, please enter your name.");   //Takes the name of the user to personalize the greeting

alert("Ok, " + userName + ", pick a number from 1-10, but keep it to yourself.\nAdd " + numberGame[0] + " to it.\nSubtract " + numberGame[1] + " from the total.\nAdd " + numberGame[2] + " to your total.\nSubtract the number you originally started with, then get ready!"); //Alert to take user through calculation

//Calculation for number game
var guessNumber = 0 + Number(numberGame[0]) - Number(numberGame[1]) + Number(numberGame[2]); //Number function used to correct error with array showing as a string


//Print results of number game
console.log("Concentrate, " + userName + "...the number you are currently thinking of is " + guessNumber + "!");

//The number selected does not matter.  Call it x.  Since "the number you started with" is subtracted from the equation, all that counts are the variables provided by the user.
