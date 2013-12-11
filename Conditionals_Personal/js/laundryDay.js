/*Joshua Elliott
10 December 2013
Conditionals: Personal
 */

//This script will gather information on how many work outfits a user has and will return if they need to do laundry today


//Define and prompt user for information: number of outfits, number of shifts
var numberOutfits = prompt("How many CLEAN outfits do you have for work?");   //First variable of user input
if (numberOutfits == ""){   //Conditional to check user input
    numberOutfits = prompt("Invalid entry. Please enter how many outfits you have for work?",0);  //Second request for data
    if (numberOutfits == ""){   //Conditional to check user input
        alert("We'll assume your hesitation to answer means 0.");   //Auto-assign value of 0.
        numberOutfits = 0;  //Assign 0 to variable
    }
}
var numberShifts = prompt("How many shifts do you have before your next day off?");   //Second variable of user input
if (numberShifts == ""){   //Conditional to check user input
    numberShifts = prompt("Invalid entry. Please enter how many shifts you have this week?",0);   //Second request for data
    if (numberShifts == ""){   //Conditional to check user input
        alert("Not working this week, eh? 0 shifts it is.");   //Auto-assign value of 0
        numberShifts = 0;  //Assign 0 to variable
    }
}

//Calculation to determine if user has enough outfits
var doLaundry = numberShifts - numberOutfits;   //Calculate if there are enough outfits for the week.

//Basic conditional argument to tell user if they need to do laundry or not, return result
if (doLaundry <= 0){   //Conditional to check result of calculation
    console.log("You do not need to do laundry today.");  //Result if outfits > shifts
}else{
    console.log("You will run out of laundry in " + doLaundry + " days. Grab the detergent and get cracking!");   //Result if shifts > outfits
}
