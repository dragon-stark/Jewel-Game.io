
// Crystal Variables

var crystal = {
	purple:
	{
		name: "purple",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	}
};


// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// functions

var getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and restarts the game)
var startGame = function () {

	// Reset the Current Score
	currentScore = 0;

	// Set a new Target Score (between 19 and 120)
	targetScore = getRandom(19, 120);


	// Set different values for each of the crystals (between 1 and 12)
	crystal.yellow.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.purple.value = getRandom(1, 12);

	// Change the HTML to reflect all of these changes
	$("#your-score").text(currentScore);
	$("#target-score").text(targetScore);

	// Testing Console
	console.log("-----------------------------------");
	console.log("Target Score: " + targetScore);
	console.log("yellow: " + crystal.yellow.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
		" | purple: " + crystal.purple.value);
	console.log("-----------------------------------");
};

// Checks for a win or a loss to Reset Game
var checkWin = function () {

	// Check if currentScore is larger than targetScore
	if (currentScore > targetScore) {
		alert("betterluck next time");
		console.log("Better Luck Next Time");

		// Add to Loss Counter
		lossCount++;

		// Change Loss Count HTML
		$("#loss-count").text(lossCount);

		// Restart the game
		startGame();
	}

	else if (currentScore === targetScore) {
		alert("Great Job, you win!");
		console.log("Great Job, You Win!!");

		// Add to the Win Counter
		winCount++;

		// Change Win Count HTML
		$("#win-count").text(winCount);

		// Restart the game
		startGame();
	}

};

// Respond to clicks on the crystals
var addValues = function (clickedCrystal) {

	// Change currentScore
	currentScore += clickedCrystal.value;

	// Change the HTML to reflect changes in currentScore
	$("#your-score").text(currentScore);

	// Call the checkWin Function
	checkWin();

	// Testing Console
	console.log("Your Score: " + currentScore);
};

// Main Game Function

// Starts the game
startGame();

$("#purple").click(function () {
	addValues(crystal.purple);
});

$("#red").click(function () {
	addValues(crystal.red);
});

$("#green").click(function () {
	addValues(crystal.green);
});

$("#yellow").click(function () {
	addValues(crystal.yellow);
});
