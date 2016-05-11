$(document).ready(function() {
	$(".new-game").on("click", function(){
		var game = new Game('0000202000000000')
		game.populateBoard()
	});

});

