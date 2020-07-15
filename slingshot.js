class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA, 
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.sling=Matter.Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            line (pointA.x,pointA.y, pointB.x, pointB.y);
        }

    }

    attach(A){
        this.sling.bodyA=A;
    }

    fly (){
        this.sling.bodyA=null;
    }
}