function Game(string){
	this.string = string;
}

Game.prototype.populateBoard = function(){
	var string= this.string;
	var cells = $(".grid-cell");
	cells.each(function(index){
		$(cells[index]).text(string[index]);
	})
}