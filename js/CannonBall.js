class CannonBall {
  constructor(x, y) {
    var options = {
     //add resistution 
     restitution: 0.8, friction: 1.0,
      density: 1.0, isStatic: true   };
      this.r=40;this.body=Bodies.circle(x,y,this.r,options)

//add circle to the body


//loadImage
this.image=loadimage("./assets/cannonball.png");
image(this.image,0,0,this.r,this.r);
    World.add(world, this.body);
  }

  //add shoot function 
  shoot() { var velocity=p5.Vector.fromAngle(cannon.angle);
  velocity.mult(20)
Matter.Body.setStatic(this.body,false);
Matter.Body.setVelocity

};


  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);





    //call the image function
    pop();

    }
  }

