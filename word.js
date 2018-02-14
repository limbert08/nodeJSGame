// IMPORT Dependencies 
var main = require("./nbaplayers.js");
var letter = require("./letter.js");
exports.letterArr = [];

//Verify LETTER guesses
exports.checker = function(){
	var wordToCheck = main.chosenWord;
	exports.letterArr.push(main.letter);
	var detected = 0; 
	for(var i = 0; i < wordToCheck.length; i++){
		if(wordToCheck.charAt(i) == main.letter){
			letter.editArray(i, main.letter);
			detected++;
		}
	}
	letter.displayWord();
	if(detected == 0){
		main.lives++; 
	}
	main.requestInfo();

}; 


exports.wordCheck = function(){
	var guess = main.wordGuess;
	var word = main.chosenWord;
	var isNotEqual; 

//Verify WORD Guesses
	for(var k = 0; k<word.length; k++){
		if(guess[k] != word[k]){
			isNotEqual = false; 
		}
		else{
			isNotEqual = true; 
		}
	}

	if(isNotEqual == true){
		console.log("YOU ARE CORRECT !!!");
		main.playAgain();
	}
	else{
		console.log("Sorry, try again");
		main.lives++;
		main.requestInfo();
	}
};