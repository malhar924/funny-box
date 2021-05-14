class Box{
  constructor(x,y,w,h){
  var option={
  restitution:1
}
this.body=Bodies.rectangle(x,y,w,h,option);
this.w=w
this.h=h
World.add(world,this.body);}
display(){
    push()
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
 rectMode=(CENTER);
 fill("yellow");
 rect(0,0,this.w,this.h);   
 pop()
}
}