class Iron{
    constructor(x,y,width,height){
	var options = {
     'restitution':0.8,
	 'friction':9,
	 'density':12

	}
		this.body=Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;

		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.xsto,ironpos.y);
			rectMode(CENTER)
			stroke("dark pink");
			fill("pink");
            rect(100,450,0,this.width,this.height);
			pop()
	}
}