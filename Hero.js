class Hero
 {
      constructor(x, y, width, height, angle) {
           var options = {
                density: 1, 
                frictionAir: 0.0005
            };
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height; 
        this.image = loadImage("hero.jpg");
        World.add(world, this.body);
             }
    display() { 
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle); 
        image( this.image,0, 0, this.width, this.height); 
        pop();
            } 
        
        }