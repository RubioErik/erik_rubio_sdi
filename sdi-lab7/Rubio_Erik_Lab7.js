//alert("JavaScript works!");

// Erik Rubio
// SDI 1409
// Lab 7 Lab


var myCar = {
	
	make        : "Dodge",
	model       : "Challenger",
	color       : "Red",
	topspeed    : 160,
	currentspeed: 0,
	
	
	getAccel: function(increase) {
		
		var acceleration = this.currentspeed + increase;
		if (increase > this.topspeed) {
			this.currentspeed = this.currentspeed + increase;
			console.log(myCar.make + myCar.model + "'s" + " top speed is " + myCar.topspeed);
			
			
		} else {
			console.log(myCar.make + myCar.model + "'s" + " current speed is " + increase + " and accelerating");} 
			
	
			
			for(i = 0; i < 3; i++){
			
			console.log("My " + myCar.make + myCar.model + "'s" + " current speed is " + acceleration++);
	
		} 
		return acceleration;
		

    },
    
    	getDeaccel: function(decrease) {
    		
    		var Deacceleration = decrease - this.currentspeed;
    		if (decrease < this.currentspeed) {
    			this.currentspeed = decrease - this.currentspeed;
    			console.log("My " + myCar.make + myCar.model + "'s" + " current speed is " + myCar.currentspeed);
    			
    			
    		} else {
    			console.log(myCar.make + myCar.model + "'s" + " current speed is " + decrease + " and decelerating");
    			} 
    			
    			
    		
    		for(i = 0; i < 3; i++) {
    			console.log("My " + myCar.make + myCar.model + "'s" + " current speed is " + Deacceleration--);
    			
    		} 
    		
    		return Deacceleration;
			
    		}
     
  };
 
myCar.getAccel(156);
myCar.getDeaccel(158);

	









