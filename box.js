class Box{

    constructor(x, y, width, height, color){
         var options ={
            isStatic:true
                }
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world,this.body)
        this.width = width
        this.height = height
        this.color = color
    }
    display(){
   var pos = this.body.position
   fill(this.color);
   rectMode(CENTER)
   rect(pos.x, pos.y, this.width, this.height)
    }


}