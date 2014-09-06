alert("JavaScript works!");

// Erik Rubio
// SDI 1409
// Day 2 Lab

// My Variables

var myCar = "Challenger";
var myFavoriteShop = 'Pep Boy\'s';
var numberOfTrips = 7;
var open = true;

// My confirms 

myCar = prompt("Enter your car model:");
numberOfTrips = parseFloat(prompt("How many trips do you usually take per month?"));
open = confirm("Is the shop open today? \nChoose OK for Yes, or select cancel for No.");


console.log(numberOfTrips);

// My Outputs 

console.log("I drive my " + myCar + ".");
console.log("I shop at " + myFavoriteShop + " for new car parts.");
console.log("I take about " + numberOfTrips + " trips per month.");
console.log("It's " + open + " that it is open today");


