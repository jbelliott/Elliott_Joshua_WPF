/*Joshua Elliott
10 December, 2013
Conditionals Worksheet: Group 2
 */

//Correct username and password
var correctUsername = "drwho"; //given username
var correctPass = "tardis123"; //given password

//Prompt for username and password

var enterUsername = prompt("Welcome to the U.N.I.T. login page. Please enter your username.");  //user entered username
var enterPW = prompt("Please enter your password.");   ///user entered password

//Conditional test of user information

if (enterUsername === correctUsername && enterPW === correctPass){ //Conditional test
    console.log("Welcome, " + correctUsername + "!");  //Response if both are true
}else if(enterUsername === correctUsername){  //Test against only username
    console.log("Password does not match our records.");  //Password is wrong if username correct
}else{
    console.log("User not found. Try again."); //Otherwise, username was incorrect to cause first test to fail
}