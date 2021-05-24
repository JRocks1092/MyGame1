function isTouching(object1, object2) {

    var touch = false;

    if (object1 !== undefined && object2 !== undefined) {

        var object1Position = object1.body.position;
        var object2Position = object2.body.position;
        
        var object1TopPosition = object1Position.y - object1.height / 2;
        var object1BottomPosition = object1Position.y + object1.height / 2;
        var object1LeftPosition = object1Position.x - object1.width / 2;
        var object1RightPosition = object1Position.x + object1.width / 2;
        
        var object2TopPosition = object2Position.y - object2.height / 2;
        var object2BottomPosition = object2Position.y + object2.height / 2;
        var object2LeftPosition = object2Position.x - object2.width / 2;
        var object2RightPosition = object2Position.x + object2.width / 2;

        if (object1BottomPosition >= object2TopPosition && object1TopPosition <= object2BottomPosition || object1RightPosition >= object2LeftPosition && object1LeftPosition <= object2RightPosition) {

            touch = true;

        } else {

            touch = false;

        }            
    }
    return touch;
}

class AnimationManager {

    constructor() {

        this.animations = [];

    }

    addAnimation(frameIndex, label, imageLocations) {

        this.animations.push(new Animation(frameIndex, label, imageLocations));

    }

    playAnimation(parameters, label) {

        var animation = this.getAnimation(label);

        if (animation !== null) {

            animation.play(parameters);

        }
    }

    getAnimation(label) {

        var i;
        var result = null;

        if (this.animations !== null) {
            for (i = 0; i < this.animations.length; i++) {

                if (this.animations[i].label === label) {

                    result = this.animations[i];
                    break;

                }
            }
        }

        if (result !== null) {

            return result;

        } else {

            console.log("Animation not Found!");

        }
    }
}

class Animation {

    #frameIndex = null;
    #imageLocations = null;
    #frames = null;
    #currentFrame = null;

    constructor(frameIndex, label, imageLocations) {

        this.#frameIndex = frameIndex;
        this.label = label;
        this.#imageLocations = imageLocations;
        this.#frames = null;
        this.#currentFrame = 0;
    }

    loadImages() {

        for (let i = 0; i < this.#imageLocations.length; i++) {

            this.#frames.push(loadImage(this.#imageLocations[i]));

        }
    }

    play(parameters) {

        if (this.#frames === null) {

            this.#frames = [];
            this.loadImages();

        }
        else {

            var pos = parameters.body.position;

            push();

            imageMode(CENTER);
            translate(pos.x, pos.y);                        
           
            image(this.#frames[this.#currentFrame], 0, 0, parameters.width, parameters.height);

            pop();

            if (frameCount % this.#frameIndex === 0) {

                this.#currentFrame++;

            }

            if (this.#currentFrame > this.#frames.length - 1) {

                this.#currentFrame = 0;

            }
        }
    }
}

