/*Joshua Elliott
10 December, 2013
Conditionals Worksheet: Group 2
 */

//username, pw, correct user, correct pw


//welcome, username!   user not found. try again. password does not match our records

//Correct username and password
var correctUsername = "drwho";
var correctPw = "tardis123";

//Prompt for username and password

var enterUsername = prompt("Welcome to the U.N.I.T. login page. Please enter your username.");
var enterPW = prompt("Please enter your password.");

//Conditional test of user information

if (enterUsername === correctUsername && enterPW === correctPW){
    true
}else if(enterUsername === correctUsername){
    pw false
}else{
    user false
}