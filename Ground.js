class Ground {

constructor (){

var options={
    'isStatic':true
}

this.body=Bodies.rectangle(400,680,800,10,options)

this.width=800;
this.height=10;

World.add(world,this.body)

}

display(){

    rectMode(CENTER)

    strokeWeight(4)
stroke("blue")
fill("blue")

    rect(400,680,800,10)
}

}