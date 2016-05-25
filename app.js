var Square = function (place) {
  this.place = place; //1-9
  this.marker = null; //"X" or "O"
};

Square.prototype.isOccupied = function() {
	return this.marker ? true : false;
};

var board = [];

for (var i = 1; i < 10; i++) {	
	board.push(new Square(i));
}
console.log(board);

var Player = function(marker) {
	this.marker = marker;
	this.score = 0;
};

Player.prototype.placeMarker = function(square) {
	if(square.isOccupied) {
		//TODO: some type of error / blocked action
	} else {
		square.marker = this.marker;
	}
};