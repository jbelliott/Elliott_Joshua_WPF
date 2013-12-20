/*
Joshua Elliott
19 December 2013
Functions: Personal
 */

//This script will calculate how much free time (if any) based on user inputs.


//Collect variables from user to subtract from the number of hours in a week
var hoursSleep = prompt("How many hours a night do you sleep?");
var hoursWork = prompt("How many hours are you working this week?");
var hoursSchool = prompt("How many hours of schoolwork do you have this week?");
var hoursWeek = 168;

//Define function
function calcHours(hrsSleep, hrsWork, hrsSchool){
    var totalHrs = hrsSleep + hrsWork + hrsSchool;
    return totalHrs;
}

//Call function
var hoursUsed = calcHours(hoursSleep, hoursWork, hoursSchool);

//Conditional statement to determine if user will have free time this week, return result to user
if (hoursUsed > hoursWeek){
    console.log("You will not have any spare time this week.");
}else{
    var timeLeft = hoursWeek - hoursUsed;
    console.log("You will have " + timeLeft + " hours left in your week.");
}

