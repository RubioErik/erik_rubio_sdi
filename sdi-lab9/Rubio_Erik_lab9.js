//alert("JavaScript works!");

// Erik Rubio
// SDI 1409
// Lab 9 

// Problem 1

var formNumber = 5;
var decNumber = 2;

var Number = function(formatNumber, decimalNumber) {
	
	
	console.log(formNumber);
	
	var newNum = formNumber.toFixed(decNumber);
	console.log("My new number with a hundredths place is " + newNum);
	return newNum;
}; 

Number(formNumber, decNumber);


// Problem 2


var String10 = "10";

var convString = function(stringTen) {
	
	var conversion = (parseFloat(String10));
	console.log(conversion);
	
};

convString();


// Problem 3 

var dateMethod = function() {
	
	var todaysDate = "9/23/2014";
	var birthDate = "12/10/2014";
	var today = new Date(todaysDate);
	var nextBirthd = new Date(birthDate);
	
	console.log(today);
	console.log(nextBirthd);
	
	var dateDiff = nextBirthd - today;
	dateDiff = Math.abs(dateDiff /1000/60/60/24);
	console.log(dateDiff);
	var daysLeft = dateDiff.toFixed(0);
	console.log("There are " + daysLeft + " days left until my next birthday!");
};
dateMethod();

















