class Dustbin{

    constructor(x, y, width, height)
    {
    
    var box_options = {
    isStatic: true
    }
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.leftbody = Bodies.rectangle(this.x-50, this.y-50, 20, this.height, box_options);
          this.rightbody = Bodies.rectangle(this.x+50, this.y-50, 20, this.height, box_options);
          this.bottombody = Bodies.rectangle(this.x, this.y, this.width, 20, box_options);

          this.image = loadImage("images/dustbingreen.png");
          World.add(world, this.leftbody);
          World.add(world, this.rightbody);
          World.add(world, this.bottombody);

    }
    
    display(){
          
          imageMode(CENTER);
          
          image(this.image, this.x, this.y, this.width+50, this.height+150);
        
    }
    
    }