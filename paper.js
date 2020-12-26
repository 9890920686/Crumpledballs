class paper {

constructor () {

    var options={
        'restitution':3,
        'friction':0.3,
        'density':1,
        'isStatic':false
    }

    this.body=Bodies.circle(100,664,20,options);
    World.add(world,this.body);
    
    this.width=20
    this.height=20

    World.add(world,this.body);
}
display(){

    rectMode(CENTER)
    ellipse(100,664,20,20)

strokeWeight(4)
stroke("red")
fill("red")

}

}


