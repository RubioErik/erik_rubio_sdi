// alert("JavaScript works!");

// Erik Rubio
// SDI 1409
// Lab 5

// Addition Function

var firstNumber;
var secondNumber;
var operation;
var returnedNumber;

var addition = function (first, second) {
	
	var mySolution;
	var mySolution = (firstNumber + secondNumber);
	
	return mySolution;
	
	
	
};
returnedNumber = addition();

firstNumber = parseFloat(prompt("What is the first number?"));
console.log(firstNumber);

operation = prompt("Type + and click Okay");
console.log(operation);

secondNumber = parseFloat(prompt("What is the second number?"));
console.log(secondNumber);

returnedNumber = addition(firstNumber, secondNumber);
console.log("= " + returnedNumber + ".");

