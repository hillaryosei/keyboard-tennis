class Ball {
  constructor() {
 this.x = width/2;
 this.y = height/2;
this.xspeed = random(-3,3);
this.yspeed = random(-3,3);
this.r = 12;
this.restart();
  }
  
  
//check collision
  racketCheckLeft(rk) {
  if (this.x - this.r < rk.x + rk.w/2 &&
      this.y - this.r < rk.y + rk.h/2 &&
      this.y + this.r > rk.y - rk.h/2) {
    
    if (this.x > rk.x) {
                let diff = this.y - (rk.y - rk.h/2);
                let angle = map(diff, 0, rk.h, radians(60), radians(60));
                this.xspeed = 4 * cos(angle);
                this.yspeed = 4 * sin(angle);
                this.x = rk.x + rk.w/2 + this.r;
        }
    
    }
  }
  
  racketCheckRight(rk) {
   if (this.y - this.r < rk.y + rk.h/2 &&
            this.y + this.r > rk.y - rk.h/2 &&
            this.x + this.r > rk.x - rk.w/2) {
                
            if (this.x < rk.x) {
                let diff = this.y - (rk.y - rk.h/2);
                let angle = map(diff, 0, rk.h, radians(210), radians(125));
                this.xspeed = 4 * cos(angle);
                this.yspeed = 4 * sin(angle);
                this.x = rk.x - rk.w/2 - this.r;
    
      }
    }
  }
  
update() {
  this.x += this.xspeed;
  this.y += this.yspeed;
  
}  
  

   restart() {
        this.x = width/2;
        this.y = height/2;
        let angle = random(-PI/3, PI/3);
        this.xspeed = 5 * Math.cos(angle);
        this.yspeed = 5 * Math.sin(angle);
        
        if (random(0) < 0.75) {
            this.xspeed *= -1;
        }
    }
    
    
bounds() {
 if (this.y < 0 || this.y > height) {  
   this.yspeed*= -1;
 }
  
  if (this.x - this.r > width) {
    music.play();
    p1score++;
    this.restart();
  }
  
  if (this.x + this. r < 0) {
    music.play();
    p2score++;
    this.restart();
  }
}
  
  levelEnd() {
  
  if (p1score == 20 || p2score == 20) {
    textAlign(CENTER);
    text('GAME OVER. THANKS FOR PLAYING! refresh to restart, 300, 200');
    this.xspeed = 0;
    this.yspeed = 0;
    
    }
    
    if (p1score > 5 && p2score > 5) {
    lvl ++;
    
  }

}
  
display() {
stroke (201, 243, 100)
 fill(201, 243, 100);
  ellipse(this.x,this.y, 30)
  
}
  
  
}
  
