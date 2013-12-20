/*
Joshua Elliott
19 December 2013
Functions: Personal
 */

//This script will calculate how much free time (if any) based on user inputs.
alert("There are 168 hours in a week. Let's see how much time you will have left.");

//Collect variables from user to subtract from the number of hours in a week
var hoursSleep = prompt("How many hours a night do you sleep?");
var hoursWork = prompt("How many hours are you working this week?");
var hoursSchool = prompt("How many hours of schoolwork do you have this week?");

//Define function
function calcHours(hrsSleep, hrsWork, hrsSchool){
    var totalHrs = Number(7 * hrsSleep) + Number(hrsWork) + Number(hrsSchool);
    return totalHrs;
}

//Call function
var hoursUsed = calcHours(hoursSleep, hoursWork, hoursSchool);

//Conditional statement to determine if user will have free time this week, return result to user
if (hoursUsed > 168){  //conditional check against number of hours in the week
    console.log("You will not have any spare time this week.");  //result if true
}else{
    var timeLeft = 168 - hoursUsed;
    console.log("You will have " + timeLeft + " hours left in your week."); //result if time is left
}

