/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
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
	rectangle.color = 'blue';
	rectangle.rotationSpeed = 2;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white'); 
	rectangle.moveTowards(mouseX, mouseY, 1);
		//if (mouse.presses()) {
		rectangle.moveTo(100, 200, 5);
	}


/*******************************************************/
//  END OF APP
/*******************************************************/