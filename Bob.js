class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=50;
		
		this.body=Bodies.circle(this.x, this.y, 50, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			//strokeWeight(4);
			fill(255,0,255)
			ellipseMode(CENTER);
            fill("pink");
			ellipse(0,0,50, 50);
			pop()
			
	}

}