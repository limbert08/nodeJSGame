//PROCESS LETTER Guesses

var main = require('./nbaplayers.js');
exports.guessArr = [];
var guessDisplay = "";
exports.wordArr = [];


// Display UNDERLINES
exports.startGame = function(){
	var wordChoice = main.chosenWord;
	for(var i = 0; i<wordChoice.length; i++){
		exports.wordArr.push(wordChoice.charAt(i));
		if(wordChoice.charAt(i) == '\xa0'){  //&nbsp
		 exports.guessArr.push('\xa0');		
		 }
		 // // if(wordChoice.charAt(i) == '&nbsp'){  //&nbsp
		 // exports.guessArr.push('&nbsp');		
		 // }
		else{
		exports.guessArr.push('_');
		}
	};
}

//Display Guesses Used
exports.displayWord = function(){
	guessDisplay = "";
	for(var i = 0; i <exports.guessArr.length; i++){
		guessDisplay += exports.guessArr[i]+" ";
	}
	console.log(guessDisplay);
};

 
exports.editArray = function(position, letter){
	exports.guessArr[position] = letter; 
};