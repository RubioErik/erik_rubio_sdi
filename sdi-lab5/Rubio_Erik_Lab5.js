// alert("JavaScript works!");

// Erik Rubio
// SDI 1409
// Lab 5

// Addition Function

var firstNumber;
var secondNumber;
var operation;
var returnedNumber;
 
var divide   = function (first, second) {
	
	var mySolution4;
	var mySolution4 = (firstNumber / secondNumber);
	
	return mySolution4;
	
};
var multiply = function (first, second) {
	
	var mySolution3;
	var mySolution3 = (firstNumber * secondNumber);
	
	return mySolution3;
	
};

var subtraction = function(first, second) {
	
	var mySolution2;
	var mySolution2 = (firstNumber - secondNumber);
	
	return mySolution2;
};
var addition = function (first, second) {
	
	var mySolution;
	var mySolution = (firstNumber + secondNumber);
	
	return mySolution;
	

};
returnedNumber = addition();
returnedNumber = subtraction();
returnedNumber = multiply();
returnedNumber = divide();

firstNumber = parseFloat(prompt("What is the first number?"));
console.log(firstNumber);

operation = prompt("Select your operation, type +,-,*, or /");
console.log(operation);

secondNumber = parseFloat(prompt("What is the second number?"));
console.log(secondNumber);


returnedNumber = addition(firstNumber, secondNumber);
returnedNumber = subtraction(firstNumber, secondNumber);
returnedNumber = multiply(firstNumber, secondNumber);
returnedNumber = divide(firstNumber, secondNumber);

console.log("= " + returnedNumber);

