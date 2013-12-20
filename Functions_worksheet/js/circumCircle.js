/*Joshua Elliott
19 December 2013
Functions Worksheet: Circumference of a Circle
*/

//Circumference of a Circle is = Diameter (radius * 2) * Pi (3.14)

//Get the radius from user

var cirRadius = prompt("Please enter the radius of the circle.");

//Function to use for calculation

function calcCircum(cirRad){  //Leaves it open for a parameter to be passed to the function
    var cirPi = 3.14;  //Defines Pi
    var circumCir = cirPi * 2 * cirRad;  //Calculates the circumference
    return circumCir;  //Returns result
}

var circumCircle = calcCircum(cirRadius);  //Call function to utilize user input as argument


//Print the result to the console
console.log("A circle with radius of " + cirRadius + " will have a circumference of " + circumCircle + ".");

