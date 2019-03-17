function Game() {
	this.n;
	this.drop;
	this.matrix = [];
	this.dir = '*'; // *None Left Right Up Down

	this.health = 7; // player score/ health
	this.x;			 // player x
	this.y;			 // player y
	this.hightlight;
	this.unhiglight;




	this.getrand = function() {
		return Math.random() < 0.5 ?  -Math.floor((Math.random() * 1) : Math.floor((Math.random() * (n + 1)) + 1);
	}

	this.getrandrow = function() {
		var rowArr = new Array();
		for (var i = 0; i < this.n; i++) {
			rowArr.push(this.getrand());
		}
		return rowArr;
	}

	this.randmatrix = function() {
		this.matrix = [];
		for (var i = 0; i < this.n; i++) {
			this.matrix.push(this.getrandrow());
		}
		//console.table(this.matrix);
	}

	this.init = function(n) {
		this.n = n;
		this.x = Math.floor((Math.random() * n));
		this.y = Math.floor((Math.random() * n));

		this.randmatrix();

	}

	this.update = function() {
		var nextX = this.x, nextY = this.y;
		if (this.dir !== '*') {
			// does movement
			switch (this.dir) {
				case 'u':
					nextY = this.y - 1;
					break;
				case 'd':
					nextY = this.y + 1;
					break;
				case 'l':
					nextX = this.x - 1;
					break;
				case 'r':
					nextX = this.x + 1;
					break;
			}
			this.dir = '*';
			if ((nextX < 0 || nextX >= n) || (nextY < 0 || nextY >= n)) {
				console.log("Woops, outside the map!");
				return;
			} else {
				// do the movement, status = ok
				// console.log(this.matrix[nextX][nextY]);
				this.health += this.matrix[nextX][nextY];
				this.matrix[this.x][this.y] = -Math.floor((Math.random() * 6) + 4);
				this.x = nextX;
				this.y = nextY;
				this.matrix[this.x][this.y] = -1;
			}
		}
	}

	this.win = function() { // return Bool
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < n; j++) {
				if (this.matrix[i][j] > 0)
					return false;
			}
		}
		return true;
	}

}
