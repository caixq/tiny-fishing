import RESOURCES from './Resource';

class Fish extends Tiny.AnimatedSprite {
  constructor (type=1,width=55, height=37) {

    var textures = [];
    var deadTxtrue = [];
    for (var i = 1; i < 5; i++) {
      textures[i-1] = Tiny.TextureCache[RESOURCES['s_fish' + type + '_0' + i + '_png']];
    }
    for (var i = 5; i < 9; i++) {
      deadTxtrue[i-5] = Tiny.TextureCache[RESOURCES['s_fish' + type + '_0' + i + '_png']];
    }
    super(textures);

    this.type = type;
    this.dead = false;
    this.score = type;
    this.deadTxtrue = deadTxtrue;
    this.animationSpeed = 0.05;

    // this.swiming = Tiny.MoveTo(12000, Tiny.point(Tiny.WIN_SIZE.width, this.top-30));
    this.setPositionY(Tiny.random(this.height, Tiny.WIN_SIZE.height - this.height));
  }
}

Fish.create = (type,width, height) => {
  return new Fish(type,width, height);
}

export default Fish;
