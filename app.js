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
	if(square.isOccupied()) {
		//TODO: some type of error / blocked action
		console.log("space occupied for square " + square.place);
	} else {
		square.marker = this.marker;
		console.log("success");
	}
};

var AI = function(marker) {
	Player.call(this, marker);
};

AI.prototype = Object.create(Player.prototype);
AI.prototype.constructor = AI;


AI.prototype.executeMove = function() {
	var randomPlace = Math.floor(Math.random() * (9)); //0 to 8
	this.placeMarker(board[randomPlace]);
};