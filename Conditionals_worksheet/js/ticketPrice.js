/*Joshua Elliott
10 December, 2013
Conditionals Worksheet: Group 3
 */

//Ticket price is 12$ or 7$ for age 55+ or age < 10 or between 3pm or 5pm

//Given age and time of movie
var userAge = prompt("Please enter your age.");
var movieTime = prompt("Please enter the time of your movie.");

//Evaluate conditional statements
if (userAge <10 || userAge >=55){
    ticketPrice = 7;
}else if(movieTime >= 3 && movieTime <=5){
    ticketPrice = 7;
}else{
    ticketPrice=12;
}
//Return cost of ticket based on information
alert("Your ticket price is $" + ticketPrice);
