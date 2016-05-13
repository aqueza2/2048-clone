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
	var indexOfEmptyCell = emptyCells[Math.floor(Math.random() *emptyCells.length)];
	gameArray[indexOfEmptyCell] = randomGeneratedNumber.toString();
	this.string = gameArray.join('');
	console.log(this.string);
};

Game.prototype.move = function(direction){
	var gameArray = this.string.split("")
	console.log(gameArray)
	if (direction === "up") { 
		
	}
}


