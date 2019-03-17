var s;
var scl = 20;

var food;

function setup() {
	createCanvas(600,600);
	s = new Snake();
	frameRate(10);
	pickLocation();
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
	background(51);


	if (s.eat(food)) {
		pickLocation();
	}

	s.death();
	s.update();
	s.show();

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	}
}

/*function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;

	this.update = function () {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}

	this.show = function() {
		fill(255);
		rect(this.x, this.y, 10, 10);
	}
}*/