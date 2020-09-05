class Box extends Baseclass{
  constructor(x, y, width, height) {
    super(x,y,50,50);
    this.image = loadImage("Images/download.jpg");
    this.Visiblity = 255;
    
/*
    var options = {
          density : 0.5,
          restitution :0.4,
          friction :0.3
          //isStatic:true

      }
*/
/*
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("Images/pyramid.gif");
      World.add(world, this.body);

  */
    }      

    score()
    { 
        if(this.Visiblity<0 && this.Visiblity>-1000)
        {
          points = points+1;
        }  
    }
        
    
    display(){
      
      if(this.body.speed < 3){
        super.display();
  
      }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         rect(this.body,this.body.position.x,this.body.position.y,50,50);
         pop();
       }
      
      
          }
} 


