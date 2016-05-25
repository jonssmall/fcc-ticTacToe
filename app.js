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