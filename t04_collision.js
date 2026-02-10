/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	rectangle = new Sprite(950, 300, 90, 80, 'd');
	rectangle.color = 'yellow';
	rectangle.rotationSpeed = 2;
	rectangle.vel.x = 2;
	platform_1 = new Sprite(1300, 600, 500, 10, 'k');
	platform_2 = new Sprite(700, 700, 500, 10, 'k');
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