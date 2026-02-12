/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by gauri
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	width = random(300,600);
	height = random(300,600);
	cnv = new Canvas (width, height);


	red = new Sprite(50, 50, 100, 100);
	red.color = 'red';

	green = new Sprite(450, 50, 100, 100);
	green.color = 'green';

	yellow = new Sprite(50, 450, 100, 100);
	yellow.color = 'yellow'

	blue = new Sprite(450, 450, 100, 100);
	blue.color = 'blue'

	purple = new Sprite(250, 250, 100, 100);
	purple.color = 'purple';

}
	/*
	cnv = new Canvas(windowWidth, windowHeight);
	rectangle = new Sprite(950, 400, 50, 80);
	rectangle.color = 'pink';
	circle = new Sprite(950, 300, 90.5);
	circle.color = 'blue';

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('turquoise');
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/