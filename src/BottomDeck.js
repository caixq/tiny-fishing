/* eslint-disable */
import RESOURCES from './Resource';
import './Button';

class BottomDeck extends Tiny.Container {
  constructor () {
    super();
    var self = this;
    this.currentCannon = 1;
    this.cannonHolder = Tiny.Sprite.fromImage(RESOURCES['s_bottom_bar_png']);
    this.cannon = Tiny.Sprite.fromImage(RESOURCES['s_cannon1_png']);
    this.minus = Tiny.ImageButton(RESOURCES['s_cannon_minus_png'], RESOURCES['s_cannon_minus_down_png'], this.changeCannon(false, this));
    this.plus = Tiny.ImageButton(RESOURCES['s_cannon_plus_png'], RESOURCES['s_cannon_plus_down_png'], this.changeCannon(true, this));
    this.bullet = Tiny.AnimatedSprite.fromImage(RESOURCES['s_bullet' + self.currentCannon + '_png']);
    this.renderSprite();

    //设置当前layer可点击
    this.interactive = true;
  }
  renderSprite () {
    /*炮架不在正中间 左右多减了了些*/
    this.cannonHolder.setPosition(Tiny.WIN_SIZE.width/2-850/2, Tiny.WIN_SIZE.height- 72);
    this.minus.setPosition(Tiny.WIN_SIZE.width/2 - 100, Tiny.WIN_SIZE.height- 31);
    this.plus.setPosition(Tiny.WIN_SIZE.width/2+140/2, Tiny.WIN_SIZE.height- 31);
    this.cannon.setPosition(Tiny.WIN_SIZE.width/2, Tiny.WIN_SIZE.height- 80/2);
    this.cannon.setAnchor(0.5);
    this.bullet.setPosition(Tiny.WIN_SIZE.width/2,999999);  //放到屏幕之外
    this.bullet.setAnchor(0.5);

    this.addChild(this.cannonHolder);
    this.addChild(this.minus);
    this.addChild(this.plus);
    this.addChild(this.cannon);
    this.addChild(this.bullet);
  }
  changeCannon (plus) {
    var self = this;
    return function () {
      if (plus) {
        if (self.currentCannon < 7) {
          self.currentCannon ++;
        }
      } else {
        if (self.currentCannon > 1) {
          self.currentCannon --;
        }
      }
      self.cannon.texture = Tiny.Texture.fromImage(RESOURCES['s_cannon' + self.currentCannon + '_png']);
      self.bullet.texture = Tiny.Texture.fromImage(RESOURCES['s_bullet' + self.currentCannon + '_png']);
    }
  }
  shotBullet (toX,toY) {
    var self = this;
    var cannnonPosi = this.cannon.getGlobalPosition();
    var x = toX - cannnonPosi.x;
    var y = cannnonPosi.y - toY;
    var deg = Math.atan2(x,y); // 角度是弧度值

    this.cannon.setRotation(deg);
    this.bullet.setRotation(deg);
    this.bullet.x = Tiny.WIN_SIZE.width/2;
    this.bullet.y = Tiny.WIN_SIZE.height- 80/2;
    this.bullet.fly = Tiny.MoveTo(1000, {x: toX, y: toY});
    this.bullet.runAction(this.bullet.fly);
  }
}
BottomDeck.create = () => {
  return new BottomDeck();
}

export default BottomDeck;
