class Hand {

    constructor(x, y) {

        var options = {

            'isSensor': true

        }

        this.body = Bodies.rectangle(x, y, 10, 32.5, options);
        this.handImageRight = loadImage("Images/CharacterHandStand.png");
        this.handImageLeft = loadImage("Images/CharacterHandStandL.png");
        this.height = 135;
        this.width = 127;
        this.angle;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        this.angle = this.body.angle;

        if (isToRight) {

            push();

            imageMode(CENTER);
            translate(pos.x, pos.y);
            angleMode(DEGREES);
            rotate(this.angle - 90);
            image(this.handImageRight, 0, 32.5, this.width, this.height);

            pop();

        } 
        else {

            push();

            imageMode(CENTER);
            translate(pos.x, pos.y);
            angleMode(DEGREES);
            rotate(this.angle + 90);
            image(this.handImageLeft, 0, 32.5, this.width, this.height);

            pop();
        }

      /*  push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, 10, 65);
        pop();*/

    }

}