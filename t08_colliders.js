/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	console.log("setup: ");
	cnv = new Canvas(1000, 900);
	wallLH  = new Sprite(0, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(1000, 900, 10, 2000, 'k');
	wallRH.color = 'green';
	wallTop = new Sprite(1000, 900, 2000, 10, 'k');
	wallTop.color = 'blue';
	wallBot = new Sprite(1000, 0, 2000, 10, 'k');
	wallBot.color = 'purple';
	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.y = 2;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;
	alien();
}

function alien() {
	alienGroup = new Group();
	for (i = 0; i < 40; i++) {
		alien = new Sprite(5,5);
		alien.vel.x = 3;
		alien.vel.y = 4;
		alien.bounciness = 1;
		alien.friction = 0;
		alienGroup.add(alien);
	}


	// Register a callback:
	// if any alien in alienGroup collides with ball_1, call func2Call
	alienGroup.collides(ball_1, func2Call);


	function func2Call(_ssss, _ball_1) {
		// Delete the alien which was hit
		_ssss.remove();
	}
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white');
}

/*******************************************************/
//  END OF APP
/*******************************************************/