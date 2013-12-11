/*Joshua Elliott
10 December 2013
Conditionals: Personal
 */

//This script will gather information on how many work outfits a user has and will return if they need to do laundry today


//Define and prompt user for information: number of outfits, number of shifts
var numberOutfits = prompt("How many CLEAN outfits do you have for work?");
if (numberOutfits == ""){
    numberOutfits = prompt("Invalid entry. Please enter how many outfits you have for work?",0);
    if (numberOutfits == ""){
        alert("We'll assume your hesitation to answer means 0.");
        numberOutfits = 0;
    }
}
var numberShifts = prompt("How many shifts do you have before your next day off?");
if (numberShifts == ""){
    numberShifts = prompt("Invalid entry. Please enter how many shifts you have this week?",0);
    if (numberShifts == ""){
        alert("Not working this week, eh? 0 shifts it is.");
        numberShifts = 0;
    }
}


//Calculation to determine if user has enough outfits
var doLaundry = numberShifts - numberOutfits;

//Basic conditional argument to tell user if they need to do laundry or not, return result
if (doLaundry <= 0){
    console.log("You do not need to do laundry today.")
}else{
    console.log("You will run out of laundry in " + doLaundry + " days. Grab the detergent and get cracking!")
}
