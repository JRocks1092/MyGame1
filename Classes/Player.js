class Player {
    //#region classes

    #i = 0;

    constructor(x, y) {

        var options = {

            //'isStatic':true
            'restitution': 0,
            'friction': 0

        }

        this.body = Bodies.rectangle(x, y, 20, 135, options);
        this.hand = new Hand(x, y - 30);        
        this.isGrounded = false;        
        isToRight = true;
        moving = false;        
        this.body.label = "player";

        this.parameters = {

            body: this.body,
            width: 127,
            height: 135
        }
        this.animationManager = new AnimationManager();
        this.assignAnimations();

        World.add(world, this.body);
    }

    display() {

        this.setAnimations();
        /*
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(0, 0, 20, 130);

        pop();*/
        this.hand.display();
    }

    //#endregion

    //#region animations

    assignAnimations() {

        this.animationManager.addAnimation(5, "standStillRight", ["Images/CharacterStand.png"]);
        this.animationManager.addAnimation(5, "standStillLeft", ["Images/CharacterStandL.png"]);
        this.animationManager.addAnimation(5, "runningRight", [

            "Images/CharacterR1.png",
            "Images/CharacterR2.png",
            "Images/CharacterR3.png",
            "Images/CharacterR4.png",
            "Images/CharacterR5.png",
            "Images/CharacterR6.png",

        ]);

        this.animationManager.addAnimation(5, "runningLeft", [

            "Images/CharacterL1.png",
            "Images/CharacterL2.png",
            "Images/CharacterL3.png",
            "Images/CharacterL4.png",
            "Images/CharacterL5.png",
            "Images/CharacterL6.png",

        ]);

    }

    setAnimations() {

        if (moving) {

            if (isToRight) {

                this.animationManager.playAnimation(this.parameters, "runningRight");

            } else {

                this.animationManager.playAnimation(this.parameters, "runningLeft");

            }

        } else {

            if (isToRight) {

                this.animationManager.playAnimation(this.parameters, "standStillRight");

            }
            else {

                this.animationManager.playAnimation(this.parameters, "standStillLeft");

            }
        }

    }

    //#endregion

    //#region movements

    playerMovements() {

        this.rotateArm();
        this.checkCollisions();

        if (this.isGrounded) {

            this.move();

        }
    }

    rotateArm() {

        this.hand.body.position.x = this.body.position.x;
        this.hand.body.position.y = this.body.position.y - 30;

        var slope = (this.hand.body.position.y - mouseY) / (mouseX - this.hand.body.position.x);
        var angleRadian = Math.atan(slope);
        var angleDegree = -angleRadian * 180 / PI;

        Matter.Body.setAngle(this.hand.body, angleDegree);
    }

    move() {

        var pos = this.body.position;

        if (keyIsDown(32)) {

            moving = true;

        } else {

            moving = false;

            if (this.isGrounded) {

                Matter.Body.setVelocity(this.body, { x: 0, y: 0 });

            }

        }

        if (mouseX > this.body.position.x) {

            isToRight = true;

            if (moving) {

                pos.x += 1;

            }

        } else {

            isToRight = false;

            if (moving) {

                pos.x -= 1;

            }

        }


        if (keyIsDown(UP_ARROW)) {

            Matter.Body.applyForce(this.body, pos, { x: 0, y: -0.1 })

        }

        console.log("mouse: "+mouseX+"  position: "+this.body.position.x+"  ground : "+this.isGrounded);
    }

    //#endregion   

    //#region grounded
    

    checkCollisions() {

        if (this.Grounded(platforms[this.#i])) {

            this.isGrounded = true;

        }
        else {

            this.isGrounded = false;
            this.#i++;

            if (this.#i > platforms.length - 1) {

                this.#i = 0;

            }

        }
    }

    Grounded(object) {

        var ground = false;

        if (object !== undefined) {

            var playerPos = this.body.position;
            var bodyPos = object.body.position;
            var playerFeetPosition = playerPos.y + 135 / 2;
            var groundTopPosition = bodyPos.y - object.height / 2;
            var groundBottomPosition = bodyPos.y + object.height / 2;
            var groundLeftPosition = bodyPos.x - object.width / 2;
            var groundRightPosition = bodyPos.x + object.width / 2;



            if (playerFeetPosition > groundTopPosition && playerFeetPosition < groundBottomPosition && playerPos.x > groundLeftPosition && playerPos.x < groundRightPosition) {

                ground = true;

                if (playerFeetPosition > groundTopPosition) {

                    Matter.Body.setPosition(this.body, { x: this.body.position.x, y: groundTopPosition - 135 / 2});

                }

            } else {

                ground = false;

            }
        }

        //console.log("ground : " + groundTopPosition + "   feet : " + playerFeetPosition + "    groundB : " + groundBottomPosition);

        //log("ground : " + groundLeftPosition + "   feet : " + playerPos.x + "    groundB : " + groundRightPosition + "   grounded :" + ground);


        return ground;
    }


    //#endregion
}