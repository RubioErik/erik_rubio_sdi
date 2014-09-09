// Erik Rubio
// SDI 1403
// Lab 3

// Variables

var myCar = "Challenger";
var myFavoriteShop = 'Pep Boy\'s';
var numberOfTrips = 7;
var Racecar;
var numberOfPeople;
var numberOfAdults;
var carType;
var modelType;

// Outputs

console.log("I drive my " + myCar + ".");
console.log("I shop at " + myFavoriteShop + " for new car parts.");
console.log("I take about " + numberOfTrips + " trips per month.");

Racecar = confirm("Is your favorite type of car a race car?");

if (Racecar == true) {
	console.log("It's " + Racecar + " that I like race cars");
	
	var numberOfPeople = prompt(" How many people are you bringng to the shop?");
	console.log(numberOfPeople);
	
	var numberOfAdults = parseFloat(prompt("Type the number of Adults you are bringing"));
	console.log(numberOfAdults);
	
	if(numberOfAdults >= 2) {
		console.log("You have " + numberOfAdults + " adults you recieve a discount at our shop today!");
	} else {
		console.log("You have" + numberOfAdults + " adults you do not have enough adults with you to recieve the discount");
	}
	
} else {
	console.log("It's " + Racecar + " that I like race cars");
	
	var carType = prompt("What kind of car do you prefer more?");
	console.log(carType);
	
	var modelType = prompt("Is it true that you like a Honda car? \n Type yes or no");
	console.log(modelType);
	
	if (modelType === "yes") { console.log("You qualify for a free 25 dollar gift card!");}
	
	else { console.log ("You only qualify for a 5 dollar gift card");}

}

console.log("Thanks so much for giving talking with us and giving us some info today! Have an awesome day!");


