class Platform {

    constructor(x, y, width, height) {

        var options = {

            'isStatic': true,
            'restitution' : 0,
            'friction' : 0
        }

        platforms.push(this);
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.body.collisionFilter.group = -1;

        this.body.label = "platform";

        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;

        fill("black");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}