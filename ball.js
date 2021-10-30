class Ball{
    constructor(x, y, width, height) {
        var options = {
            
            'friction':0.05,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(4);
        stroke("green");
        fill("Yellow");
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}