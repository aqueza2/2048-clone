function Game(string){
	this.string = string;
};

Game.prototype.populateBoard = function(){
	var string = this.string;
	var cells = $(".grid-cell");
	cells.each(function(index){
		if (string[index] != 0){
			$(cells[index]).text(string[index]);
		};
	});
};

Game.prototype.addRandomNumber = function(){
	var possibilities = [2,2,2,4,2,2,2,2]
	randomGeneratedNumber = possibilities[Math.floor(Math.random() * possibilities.length)];
	var gameArray = this.string.split("");
	var emptyCells = []
	gameArray.forEach(function(cell, index){
		if(cell === "0" ){
			emptyCells.push(index);
		}
	});
	var indexOfEmptyCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
	gameArray[indexOfEmptyCell] = randomGeneratedNumber.toString();
	this.string = gameArray.join('');
	console.log(this.string);
};

Game.prototype.move = function(direction){
	var string = this.string;
	var one = string.substring(0, 4).split("")
	var two = string.substring(4, 8).split("")
	var three = string.substring(8, 12).split("")
	var four = string.substring(12, 16).split("")
	var newArray = [one,two, three, four]
	if (direction === "up") { 
		var upArray = transpose(newArray);
		upArray.forEach(function(section){
			if (section.length === 4) {
				if ((section[0] === section[1]) && (section[2] === section[3])) {
					section[0] = section[0] +
				} else if (section[0] === section[1]) {

				} else if (section[1] === section[2]) {

				} else if (section[2] === section[3]) {

				}
			}
		})
	}
}


