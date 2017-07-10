import RESOURCES from './Resource';

class Fish extends Tiny.AnimatedSprite {
  constructor (type,parent) {

    var textures = [];
    var deadTxtrue = [];
    for (var i = 1; i < 5; i++) {
      textures[i-1] = Tiny.TextureCache[RESOURCES['s_fish' + type + '_0' + i + '_png']];
    }
    for (var i = 5; i < 9; i++) {
      deadTxtrue[i-5] = Tiny.TextureCache[RESOURCES['s_fish' + type + '_0' + i + '_png']];
    }
    super(textures);
    this._parent = parent;
    this.type = type;
    this.dead = false;
    this.score = type;
    this.deadTxtrue = deadTxtrue;
    this.animationSpeed = 0.05;

    this.setPositionY(Tiny.random(this.height, Tiny.WIN_SIZE.height - this.height));
    this.swiming = Tiny.MoveTo(12000, Tiny.point(Tiny.WIN_SIZE.width, this.y - 30));
    this.swiming.setInterpolation(Tiny.TWEEN.Interpolation.Bezier);
    this.runAction(Tiny.RepeatForever(this.swiming));
    this.play();
  }
  die (x,y) {
    var self = this;
    this.dead = true;
    this.textures = this.deadTxtrue;
    Tiny.Action.cleanup(this);
    setTimeout(function () {
      self._parent.removeChild(self);
      self._parent._coin.showCoin(x,y);
    },1000);
  }
  isCollision (x,y) {
    if (Tiny.rectIntersectsRect(this._parent._net.getBounds(),this.getBounds())) {
      console.log(999);
      this.die(x,y);
    } else {
      console.log(333);
    }
  }
}

Fish.create = (type,width, height) => {
  return new Fish(type,width, height);
}

export default Fish;
