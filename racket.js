class Racket {
constructor(left) {
this.y = height/2;
  this.w = 10;
  this.h = 140;
  this.ychange = 0;
  
    if (left) {
      this.x = this.w/2; }
  else { 
    this.x = width - this.w;
      
    }
    
  }
  
  
   update() {
    this.y += this.ychange;
    this.y = constrain(this.y, this.h/2, height-this.h/2); 
   }
  
  shift(steps){
   this.ychange = steps; 
  }
  
  display() {
    noStroke()
    fill(255);
    rectMode(CENTER);
  rect(this.x,this.y,this.w, this.h);
  }
}
