/*Joshua Elliott
19 December 2013
Functions Worksheet: Circumference of a Circle
*/

//Circumference of a Circle is = Diameter (radius * 2) * Pi (3.14)

//Get the radius

var cirRadius = prompt("Please enter the radius of the circle.");

//Function to use for calculation

function calcCircum(cirRad){
    var cirPi = 3.14;
    var circumCir = cirPi * 2 * cirRad;
    return circumCir;
}

var circumCircle = calcCircum(cirRadius); 

alert("A circle with radius of " + cirRadius + " will have a circumference of " + circumCircle + ".");

