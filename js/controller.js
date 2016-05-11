$(document).ready(function() {
	$(".new-game").on("click", function(){
		var game = new Game('0000202000000000');
		game.populateBoard();
		moveListener();
	});
	
	function moveListener(){
		$("body").keyup(function(event){
			
			if (event.which === 38){
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

