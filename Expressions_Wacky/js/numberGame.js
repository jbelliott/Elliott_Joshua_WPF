//Joshua Elliott
//6 December 2013
//Expressions: Wacky

//This script will prompt a user for numbers, then guesses a number a user is thinking of


//User data for number game

alert("Now this script will guess a number you are thinking of!\nFirst, we need three numbers from you.");
var numberGame = new Array();
numberGame[0] = prompt("\(1\)Please select a number from 1-10");
numberGame[1] = prompt("\(2\)Please select a number from 1-10");
numberGame[2] = prompt("\(3\)Please select a number from 1-10");

var userName = prompt("Please enter your name.");

alert("Ok, " + userName + ", pick a number from 1-10, but keep it to yourself.\nAdd " + numberGame[0] + " to it.\nSubtract " + numberGame[1] + " from the total.\nAdd " + numberGame[2] + " to your total.\nSubtract the number you originally started with, then get ready!");



//Print results of number game
alert("Concentrate...the number you are thinking of is " + guessNumber + "!");

