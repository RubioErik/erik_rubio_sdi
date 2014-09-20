//alert("JavaScript works!");

// Erik Rubio
// SDI 1409 
// lab 8





// Problem 1

var email = "erubio@fullsail.edu";

var emailFunc = function(myString) { 
	
	var atCheck;
	var periodCheck;
	var atCheckFunc = myString.indexOf(atCheck) > 0;
	var periodCheckFunc = myString.indexOf(periodCheck) >= 1;
	var spaceCheck = myString.indexOf(" ") === 0;
	
	
	atCheck = "@";
	periodCheck = ".";
	
	
	if (myString.indexOf(atCheck) > 0) {
		console.log("You have an @ symbol, you have a valid email address");
		
	} else { 
		console.log("You do not have an @ symbol, please enter a valid email address");
		
	};
	
	if (myString.indexOf(periodCheck) >= 1) {
		console.log("You have atleast one period, and it's attached to your domain name, you have a valid email address");

	} else {
		console.log("You do not have atleast one period, or its not at the of your domain name, your email address is invalid");
	
	};
	
	if (myString.indexOf(" ") === 0) {
	console.log("There is a space found in your email address, it is invalid");
	
	
	} else {
		console.log("There is no space found in your email address, it is valid.");
		
	};
	
}; 

emailFunc(email); 

