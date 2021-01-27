class Drops{
    constructor(x,y){
        this.body=Bodies.circle(x,y,3);
        World.add(world,this.body);
    }
    
    display(){
        var pos =this.body.position;
        fill("blue");
        circle(pos.x,pos.y,6);
    }

    update(){
        var pos = this.body.position
        if (pos.y>550){
            Body.setPosition(this.body,{x:random(0,500),y:0});
           
        }
    }
    
}