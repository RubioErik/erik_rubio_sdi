//alert("JavaScript works!");

// Erik Rubio
// SDI 1409 
// lab 8



 /*var seasons = "Spring Summer Fall Winter";
    
    var seasonsFunc = function(and,comma)
    {
        var Sep1 = " and ";
        var Sep2 = ",";
        
        console.log("First way to say the seasons.");
        seasons2 = seasons.split(" ").join(Sep1);
        console.log(seasons2);
        
        console.log("Second way to say the seasons.");
        seasons3 = seasons2.split(Sep1).join(Sep2);
      	console.log(seasons3);    
    };
    
seasonsFunc();
*/



// Problem 1
/*
var email = prompt("Enter your email address");

var emailFunc = function(myString) { 
	
	var atCheck;
	var periodCheck;
	var atCheckFunc = myString.indexOf(atCheck) > 0;
	var periodCheckFunc = myString.indexOf(periodCheck) >= 1;
	var spaceCheck = myString.indexOf(" ") === 0;
	
	
	atCheck = "@";
	periodCheck = ".";
	
	
	if (myString.lastIndexOf(atCheck) > 1) {
		console.log("You have an @ symbol, you have a valid email address");
		
	} else { 
		console.log("You do not have an @ symbol, please enter a valid email address");
		
	};
	
	if (myString.indexOf(periodCheck) >= 1) {
		console.log("You have atleast one period, and it's attached to your domain name, you have a valid email address");

	} else {
		console.log("You do not have atleast one period, or its not at the of your domain name, your email address is invalid");
	
	};
	
	if (myString.lastIndexOf(" ") >= 0) {
	console.log("There is a space found in your email address, it is invalid");
	
	
	} else {
		console.log("There is no space found in your email address, it is valid.");
		
	};
	
}; 

emailFunc(email); */











