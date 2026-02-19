/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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


		if (kb.pressing('left')) {
    // Set sprite's velocity to the left
			rectangle.vel.x = 3;
	}
	else if (kb.pressing ('right')) {
		// Set sprite's velocity to the right
	}
	if (kb.released('left')) {
		// Set sprite's velocity to zero
	}
	else if (kb.released('right')) {
		// Set sprite's velocity to zero
	}


}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white');

	rectangle.moveTowards(mouseX, mouseY, 1);
		if (mouse.presses()) {
		rectangle.moveTo(100, 200, 5);
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/