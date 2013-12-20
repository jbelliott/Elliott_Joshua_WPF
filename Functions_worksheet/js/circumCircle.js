/*Joshua Elliott
19 December 2013
Functions Worksheet: Circumference of a Circle
*/

//Circumference of a Circle is = Diameter (radius * 2) * Pi (3.14)

//Get the radius

var cirRadius = prompt("Please enter the radius of the circle.");

//Define Pi

var cirPi = 3.14;

//Set aside return variable for function to use.
var circumCircle;

function calcCircum(radius){
    var cirPi = 3.14;
    var circumference = cirPi * 2(radius);
    return circumference;
}

circumCircle = calCircum(cirRadius);

alert(circumCircle);