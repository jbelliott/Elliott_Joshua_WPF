/*Joshua Elliott
11 December 2013
Conditionals: Wacky
 */

//This makes user input into a comic book character name

//Collect user data:
var whichSide;
var goodBad = prompt("Are you a hero or villain?");
if (goodBad == ""){
    alert("You have been assigned as a hero.");
    whichSide = 1;
}else if(goodBad === "hero"){
    whichSide = 1;
}else{
    whichSide = 2;
}
var randomNumber = prompt("Pick a number 1-5.")
if (randomNumber == ""){
    randomNumber = prompt("Last chance to pick a number.");
    if (randomNumber == ""){
        alert("Your number is 3.");
    }
}
if (randomNumber <= 0 || randomNumber > 5){
    alert("Number out of range. You have been assigned the number 4.");
    randomNumber = 4;
}
var adjective = prompt("Type an adjective to describe your character.");
if (adjective == ""){
    var adjective = prompt("Invalid entry. Please type an adjective.");
    if (adjective == ""){
        if (goodBad = 1){
            alert("Your adjective is fighting.");
            adjective = "fighting ";
        }else{
            alert("Your adjective is creeping.");
            adjective = "creeping ";
        }
    }
}
var nameNoun = prompt("Pick a noun for your name.");
(nameNoun == "") ? nameNoun = "Goldfish";

alert("Your comic book name is \"The " + adjective + " nameNoun.");
