// alert("JavaScript works!");

// Erik Rubio
// SDI 1409
// Lab 5

// divde function

var firstNumber;
var secondNumber;
var operation;
var returnedNumber;
 
var divide   = function (first, second) {
	
	var mySolution4;
	var mySolution4 = (firstNumber / secondNumber);
	if(operation == "/") {
		console.log(firstNumber / secondNumber);
	}
	return mySolution4;
	
};

// multiply function

var multiply = function (first, second) {
	
	var mySolution3;
	var mySolution3 = (firstNumber * secondNumber);
	if(operation == "*") {
		console.log(firstNumber * secondNumber);
	}
	return mySolution3;
	
};
// subtraction function

var subtraction = function(first, second) {
	
	var mySolution2;
	var mySolution2 = (firstNumber - secondNumber);
	if(operation == "-") {
		console.log(firstNumber - secondNumber);
	}
	return mySolution2;
};

// addition function

var addition = function (first, second) {
	
	var mySolution;
	var mySolution = (firstNumber + secondNumber);
	if(operation == "+") {
		console.log(firstNumber + secondNumber);
	}
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



