$(document).ready(function() {
	var game;
	$(".new-game").on("click", function(){
		game = new Game('2000200040004000');
		game.populateBoard();
		moveListener();
	});

	function moveListener(){
		$("body").keyup(function(event){
			game.addRandomNumber();
			if (event.which === 38){
				game.move("up")
			} else if (event.which === 40) {
				game.move("down")
			}	else if (event.which === 39) {
				game.move("right")
			} else if (event.which === 37) {
				game.move("left")
			};
			game.populateBoard();
		});
	};
});

