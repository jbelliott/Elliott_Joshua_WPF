/*Joshua Elliott
10 December, 2013
Conditionals Worksheet: Group 3
 */

//Ticket price is 12$ or 7$ for age 55+ or age < 10 or between 3pm or 5pm

//Given age and time of movie
var userAge = prompt("Please enter your age.");  //User entered age
var movieTime = prompt("Please enter the time of your movie."); //User entered movie time
var ticketPrice;

//Evaluate conditional statements
if (userAge <10 || userAge >=55){ //Test for age
    ticketPrice = 7; //Discount if 55+ or <10 yrs old
}else if(movieTime >= 3 && movieTime <=5){  //test for time of day
    ticketPrice = 7;  //Discount if between 3 and 5
}else{  //Default if neither test results in a discount
    ticketPrice=12; //If not a valid discount, price of ticket is 12$
}
//Return cost of ticket based on information
console.log("Your ticket price is $" + ticketPrice);
