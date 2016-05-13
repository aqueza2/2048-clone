$(document).ready(function() {
	var game;
	$(".new-game").on("click", function(){
		game = new Game('0000202000000000');
		game.populateBoard();
		moveListener();
	});
	
	function moveListener(){
		$("body").keyup(function(event){
			game.addRandomNumber();
			game.populateBoard();
			if (event.which === 38){
				console.log("up")
			} else if (event.which === 40) {
				console.log("down")
			}	else if (event.which === 39) {
				console.log("right")
			} else if (event.which === 37) {
				console.log("left")
			};
		});
	};
});

