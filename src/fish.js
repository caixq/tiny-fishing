import RESOURCES from './Resource';

class Fish extends Tiny.Container {
  constructor (type=1,width=55, height=37) {
    super();
    this.type = type;
    this.speed = 0.5;
    this.moving = true;
    this.canTurning = false;
    this.hasShown = false;
    this.captured = false;

    for (var i=0; i<8;i++) {
      this.renderFish(type,width, height);
    }
  }
  renderFish (type=1,width=55, height=37) {
    var textures = [];
    this.left = Math.ceil(Math.random() * 50);
    this.top = Math.ceil(Math.random() * 200 + 30);
    for (var i = 1; i < 5; i++) {
      textures[i-1] = Tiny.TextureCache[RESOURCES['s_fish' + this.type + '_0' + i + '_png']];
    }
    this.fishBody = new Tiny.AnimatedSprite(textures);
    this.fishBody.animationSpeed = 0.05;
    this.fishBody.play();
    this.fishBody.swiming = Tiny.MoveTo(12000, Tiny.point(Tiny.WIN_SIZE.width, this.top));
    this.fishBody.setPosition(this.left, this.top);
    this.fishBody.runAction(Tiny.RepeatForever(this.fishBody.swiming));
    this.addChild(this.fishBody);
  }
}

Fish.create = (type,width, height) => {
  return new Fish(type,width, height);
}

export default Fish;
