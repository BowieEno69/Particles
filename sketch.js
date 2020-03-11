let orb; 
let orbs = [];
let numberOfOrbs = 500;
function setup() {
	createCanvas(710, 400);
 	//orb = new Orb();
 	for (var i = 0; i < numberOfOrbs; i++) {
 		orbs[i]= new Orb(random([0,1]));

 	}
}

function draw() {
	background(255);
  for (var i = 0; i < orbs.length; i++) {
  	orbs[i].display();
  	orbs[i].move();

  }
}
class Orb {
	constructor(whichColor){
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(-1,1);
		this.yspeed = random(-1,0);
		this.size = random(1,100);
		this.red = 245;
		this.green = 66;
		this.blue = 218;
		this.red1 = 66;
		this.green1 = 221;
		this.blue1 = 245;
		this.color = whichColor;
	}
	display(){
		noStroke();
		if (this.color == 1){
			fill(this.red, this.green, this.blue);
		}else{
			fill(this.red1, this.green1, this.blue1);
		}
		ellipse(this.x, this.y, this.size, this.size);
		
	}

	move(){    
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
		if (this.y <0){
			this.y = height;
		}
	}
}

