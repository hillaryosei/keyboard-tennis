//instructions: use the keys 'q' & 'a' to control the left racket and the keys 'p' & 'l' to control the right racket! 
//player 1's score = top left and player 2's score = top right
//the number of the top center is the level # (having mad trouble with this

let p1score = 0;
let p2score = 0;
let lvl = 0;


function setup() {
  createCanvas(600, 400);
  music = loadSound("tennis.mp3")
  ball = new Ball();
  left = new Racket(true);
  right = new Racket(false);
  
}

function draw() {
  //tennis court
    background(50, 168, 82);
  
  //collision
  ball.racketCheckLeft(left);
  ball.racketCheckRight(right);
  
  
  //scores
fill(255);
textSize(32);
text(p1score, 30,40);
text(p2score, 560, 40);
  
  //level
  fill(255);
  textAlign(TOP, CENTER);
  textSize (32);
  text(lvl, 295, 40);

  
    
  //ball & racket cmp.
  left.display();
  right.display();
  left.update();
  right.update();
  
  
  ball.update();
  ball.bounds();
  ball.display();
  
}

 //keyboard controls


function keyReleased() {
 left.shift(0);
 right.shift(0)
  
}

function keyPressed() {
 if (key == 'q') {
   left.shift(-12); }
  else if (key == 'a') {
    left.shift(12); }
  
  if (key == 'p') {
   right.shift(-12); }
  else if (key == 'l') {
    right.shift(12); }
  
}
