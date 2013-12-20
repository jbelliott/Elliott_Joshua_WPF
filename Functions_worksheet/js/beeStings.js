/*Joshua Elliott
19 December 2013
Functions Worksheet: Bee Stings
 */

//Given that it takes 8.666666667 bee stings per pound to kill an animal...

//Collect the weight of the victim being stung
var victimWeight = prompt("Enter the weight of the animal victim being stung.");

//Function created to calculate and return the number of stings
function beeStings(victimLbs){  //Argument provided by user input
    var stings = 8.666666667;  //Constant Variable
    var stingNumber = stings * victimLbs; //Calculating number of stings
    return stingNumber;  //Return result from function
}

//Call function for use
var stingTotal = beeStings(victimWeight);

//Return result to user
console.log("It will take " + stingTotal + " bee stings to kill this animal.");
