/*Joshua Elliott
10 December, 2013
Conditionals Worksheet: Group 2
 */

//Correct username and password
var correctUsername = "drwho";
var correctPass = "tardis123";

//Prompt for username and password

var enterUsername = prompt("Welcome to the U.N.I.T. login page. Please enter your username.");
var enterPW = prompt("Please enter your password.");

//Conditional test of user information

if (enterUsername === correctUsername && enterPW === correctPass){
    console.log("Welcome, " + correctUsername + "!");
}else if(enterUsername === correctUsername){
    console.log("Password does not match our records.");
}else{
    console.log("User not found. Try again.");
}