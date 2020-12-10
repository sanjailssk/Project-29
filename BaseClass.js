class BaseClass{
  constructor(x,y,width,height){
    var options = {
    'isStatic' : false,
    'restitutuion' : 0.1,
    'friction' : 1,
    'density' : 0.5
    }
  this.BoxObj = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world,this.BoxObj);
  }

display(){
   push();
   strokeWeight(1.5);
   rectMode(CENTER);
   rect(this.BoxObj.position.x,this.BoxObj.position.y,this.width,this.height);
   pop();
 } 
}