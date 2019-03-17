var c_size = 450; // github page problem sorted

var tw = 75; // tile width
var n = 4;
const player_size = 0.8;
const fps = 5;
var text_size = 0;
var g; // game object
var r;
var highest_level = 1;
var totalPOstive = 0;
var totalNegs = 0;

function setup() {

	tw = c_size / n;
	text_size = tw * 0.7;
	textSize(text_size);
var cnv =	createCanvas(c_size, c_size);
    cnv.parent("lazyForce");
	frameRate(fps);

	textAlign(CENTER);
	g = new Game();
	g.init(n);


}

counter = 0;

function drawBoarder() {
	stroke(50); // border color
	strokeWeight(7); // border width
	rect(0,0,width, height);
}



function drawCells() {
var binNegs = [];
var binPostive =[];
var sum = 0;
var pen=0;
	for (var i = 0; i < n; i++) {
		var rowArr = g.matrix[i];
		//console.log(rowArr);
		for (var j = 0; j < n; j++) {
			if (i != g.x || j != g.y) {
				strokeWeight(1);
				stroke(0);
				noFill();
				rect(i * tw, j * tw, tw, tw);
				noStroke();

				if (rowArr[j] > 0) {
					fill(46, 71, 51); // text color

				}

				else {
					fill(173, 64, 58); // text color
				}

				text(Math.abs(rowArr[j]), i * tw + tw / 2, j * tw + text_size + 5);	// render text
			}

				if(rowArr [j]-1 < 0){
						binNegs.push(rowArr [j]);
					}else{
						sum += rowArr[j];// add all the numnbers in Martix
		}


	}
}
	// Printing players health/score
	fill(255);
	text(g.health, g.x * tw + (tw / 2), g.y * tw + text_size + 5);
	console.log(sum); // bin negtaive numnbers
// menu section
	var goal = sum; // calusate the amout of postive values in martix which should be the goal of the player to get
	document.getElementById("goal").innerHTML = goal;
	/*var pentaly = pen;
		document.getElementById("Penatly").innerHTML = pen;
		console.log(pen)*/
	return sum;


}





function drawPlayer(x, y) {
	fill(239, 136, 67);
	stroke(175, 79, 58);
	strokeWeight(2);
	ellipse(x * tw + tw / 2, y * tw + tw / 2, tw * player_size, tw * player_size);
}

function level_up(msg) {
	n++;
	tw = c_size / n;
	text_size = tw * 0.7;
	textSize(text_size);
	restart(msg);
}

function restart(msg) {
	g = new Game();
	g.init(n);
	alert(msg);
}

function draw() {

	background(131,191,149);
	noFill();
	drawBoarder();

	g.update();
	drawPlayer(g.x, g.y);
	drawCells();


//KnowLocation();

	if (g.health < 0) {
		restart("Game over buddy!");
	}


	if (g.win()) {
		let level = n - 3;
    var save_health = g.health;
		document.getElementById("level").innerHTML = level;
		level_up("Haha you won! Next level...");
    g.health = save_health;
		save_health -= level;
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		g.dir = 'u';
	} else if (keyCode === DOWN_ARROW) {
		g.dir = 'd';
	} else if (keyCode === RIGHT_ARROW) {
		g.dir = 'r';
	} else if (keyCode === LEFT_ARROW) {
		g.dir = 'l';
	}
}
function drop(drop){
console.log("testing")



}
