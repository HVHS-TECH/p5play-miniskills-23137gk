/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
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
	ball_1.vel.y = 50;
	ball_1,bounciness = 100;
	ball_1.friction = 0;
	ball_1.drag = 0;
	alien();
}

function alien() {
	alienGroup = new Group();
	for (i = 0; i < 20; i++) {
		alien = new Sprite(8,10);
		alien.vel.x = 3;
		alien.vel.y = 4;
		alien.bounciness = 1;
		alien.friction = 0;
		alienGroup.add(alien);
	}
}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white')
}

/*******************************************************/
//  END OF APP
/*******************************************************/