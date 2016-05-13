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
	gameArray = this.string.split("");
	emptyCells = []
	gameArray.forEach(function(cell, index){
		if(cell === "0" ){
			emptyCells.push(index);
		}
	});
	indexOfEmptyCell = emptyCells[Math.floor(Math.random() *emptyCells.length)];
	gameArray[indexOfEmptyCell] = randomGeneratedNumber.toString();
	this.string = gameArray.join('');
	console.log(this.string);
};
