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


Game.prototype.newRandomNumber = function(){
	var possibilities = [2,2,2,4,2,2,2,2]
	possibilities[Math.floor(Math.random() * possibilities.length)];
}
