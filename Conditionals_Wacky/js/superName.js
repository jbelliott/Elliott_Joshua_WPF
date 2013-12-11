/*Joshua Elliott
11 December 2013
Conditionals: Wacky
 */

//This makes user input into a comic book character name

//Collect user data:
var nameNoun;   //To be used at the end
var whichSide;  //Used only if adjective not given
var goodBad = prompt("Are you a hero or villain?");   //User prompt
if (goodBad == ""){   //Conditional to test user input
    alert("You have been assigned as a hero.");  //Default if none selected
    whichSide = 1;  //assigned value for hero
}else if(goodBad === "hero"){  //Assigned hero value
    whichSide = 1;   //assigned value for hero
    alert("You are a hero.");  //Alert for user
}else{  //Alternative to being a hero
    whichSide = 2;  //assigned value for villain
    alert("You are a villain.");  //alert for user
}
var randomNumber = prompt("Pick a number 1-5.");  //Used to pick nameNoun
if (randomNumber == ""){  //Conditional to test user input
    randomNumber = prompt("Last chance to pick a number.");  //Second request for data
    if (randomNumber == ""){  //Conditional to test user input
        alert("Your number is 3.");  //Auto-assigned value
        randomNumber = 3;  //Value assigned on this line
    }
}else{
    if(randomNumber <= 0 || randomNumber > 5){  //Conditional test to ensure number within specified range
    alert("Number out of range. You have been assigned the number 4.");  //Error if out of range
    randomNumber = 4;  //Auto-assigned number
}
}
var adjective = prompt("Type an adjective to describe your character.");  //Data requested from user
if (adjective == ""){  //Conditional to test user input
    var adjective = prompt("Invalid entry. Please type an adjective.");  //Second request for user data
    if (adjective == ""){  //Conditional to test user input
        if (goodBad = 1){  //Auto-assigned if user selected hero
            alert("Your adjective is fighting.");
            adjective = "fighting ";
        }else{
            alert("Your adjective is creeping.");  //Auto-assigned if user selected villain
            adjective = "creeping ";
        }
    }
}
//This statement determines the nameNoun variable based on number selected earlier
if (randomNumber == "5"){
    nameNoun = "chicken";
}else if(randomNumber == "4"){
    nameNoun = "swan";
}else if(randomNumber == "3"){
    nameNoun = "mongoose";
}else if (randomNumber == "2"){
    nameNoun = "badger";
}else{
    nameNoun = "lion";
}

console.log("Your comic book name is The " + adjective + " " + nameNoun);  //print to console
