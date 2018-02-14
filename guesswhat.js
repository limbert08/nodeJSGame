// Array of NBA Players past & current
var words = ["lebron", "michael\xa0jordan", "larry\xa0bird", "kareem\xa0abdul\xa0jabbar", "grant\xa0hill", "kevin\xa0durant", "dr\xa0j", "moses\xa0malone", "klay\xa0thompson", "tim\xa0duncan", "karl\xa0malone", "john\xa0stockton", "ray\xa0allen", "shaq", "reggie\xa0miller", "hakeem\xa0olajuwon"];

// Use Random func to choose an NBA Player from the Array 
exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}