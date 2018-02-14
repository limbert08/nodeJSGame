// IMPORT Dependencies
var game = require('./guesswhat.js');

var inquirer = require('inquirer');

var word = require('./word.js');

var letter = require('./letter.js')

var choice;

exports.letter; 

exports.wordGuess;
 
exports.lives = 0; 

exports.chosenWord = game.chooseWord();

//Get USER INPUTS
exports.requestInfo = function(){
	if(exports.lives >= 10){
		console.log("YOU WENT OVER 10 GUESSES, TRY AGAIN? ");
		exports.playAgain();
	}
	else{
		var questions = [
	{
		type: "list",
		name: "actionChosen",
		message: "Would you like to Guess the NBA Player? \n If you know, please choose WORD instead of LETTER. Otherwise, keep guessing for LETTERs \r\n You have used "+exports.lives+" guesses out of 10. ",
		choices:[
		"letter",
		"word"
		]
	}
	];


// Work with INQUIRER NPM Package

	inquirer.prompt(questions).then(function(answers){

		if(answers.actionChosen == "letter"){
			var letterQ = [
			{
				type: "input",
				name: "letter",
				message: "Letters already chosen: "+word.letterArr+"\n Current Guess : "
			}
			];

			inquirer.prompt(letterQ).then(function(answers){
				exports.letter = answers.letter;
				word.checker();
			})
		}

 
		else if(answers.actionChosen == "word"){
			var wordQ = [
			{
				type: "input",
				name: "word",
				message: "Which NBA Player do you think it is?"
			}
			];

			inquirer.prompt(wordQ).then(function(answers){
				exports.wordGuess = answers.word;
				word.wordCheck();
			})
		}

		else{
			console.log("Incorrect, please try again.");
			exports.requestInfo();
		}
	} )
	}
	
}  //match exports.requestInfo
 
 ;

//Game Reset
exports.playAgain = function(){
	var questions = [
	{
		type: "list",
		name: "playAgain",
		message: "Would you like to play again?",
		choices:[
		"yes",
		"no"
		]
	}
	];

	inquirer.prompt(questions).then(function(answer){
		if(answer.playAgain == "yes"){
			exports.lives = 0; 
			exports.chosenWord = game.chooseWord();
			letter.guessArr = [];
			letter.wordArr = [];
			word.letterArr = [];
			letter.startGame();
			letter.displayWord();
			exports.requestInfo();
		}
		else{
			console.log("Thank YOU & Have a Nice Day!");
		}
	});
}

// START NEW GAME  
letter.startGame();
letter.displayWord();
exports.requestInfo();