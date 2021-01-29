
    class Ball {

        constructor(x,y,r) {
        
        var option={
        frictionAir:0.005,
        density:1.,
        
        }
        
        this.body = Bodies.circle(x,y,50,option);
        World.add(world, this.body);
    
        }
        display(){
    
            var pos =this.body.position;
            ellipseMode(RADIUS);
            fill("pink");
            ellipse(pos.x, pos.y,50,50)
    
        }
    
    
        }