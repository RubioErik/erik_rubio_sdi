//alert("JavaScript works!");

// Erik Rubio
// SDI 1409
// Lab 10




function multiples () {
	
	var finalNum = 0;
	for ( i = 1; i < 200; i++) {
		
		multiply = (5 * i);
	    console.log(multiply);
	 	finalNum = finalNum + multiply;
	    }
	   	
	   	console.log("Those were all the multiples of 5 out of 1000, now to find all the multiples of 3");
	   	console.log("The sum of multiples of 5 added is " + finalNum);
	   	
	 for ( i = 1; i < 333; i++) {
	 
	    multiply2 = (3 * i);
	    console.log(multiply2);
	    
	    finalNum = finalNum + multiply2;
	   
}
	
	console.log("The sum of multiples of 3 is " + finalNum);
	
};
	


multiples();




// Problem 2


var pBall = function() {
	
	for(i = 0; i < 5; i++){
		
	var pBalls4 = (Math.round(Math.random() * 59));
	console.log(pBalls4);
	
	}	
	
	var pBalls5 = Math.floor(Math.random() * 35);
	console.log(pBalls5);
};

pBall(); 












