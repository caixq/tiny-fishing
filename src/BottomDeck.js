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
    this.renderSprite();

    //设置当前layer可点击
    this.interactive = true;
  }
  renderSprite () {
    /*炮架不在正中间 左右多减了了些*/
    this.cannonHolder.setPosition(Tiny.WIN_SIZE.width/2-850/2, Tiny.WIN_SIZE.height- 72);
    this.minus.setPosition(Tiny.WIN_SIZE.width/2 - 100, Tiny.WIN_SIZE.height- 31);
    this.plus.setPosition(Tiny.WIN_SIZE.width/2+140/2, Tiny.WIN_SIZE.height- 31);
    this.cannon.setPosition(Tiny.WIN_SIZE.width/2-58/2, Tiny.WIN_SIZE.height- 80);

    this.addChild(this.cannonHolder);
    this.addChild(this.minus);
    this.addChild(this.plus);
    this.addChild(this.cannon);
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
    }
  }
}
BottomDeck.create = () => {
  return new BottomDeck();
}

export default BottomDeck;
