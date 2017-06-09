/* eslint-disable */
import RESOURCES from './Resource';
import './Button';

class BottomDeck extends Tiny.Container {
  constructor () {
    super();
    this.currentCannon = 1;
    this.cannonHolder = new Tiny.Sprite(Tiny.Texture.fromImage(RESOURCES['s_bottom-bar_png']));
    this.minus = Tiny.ImageButton(RESOURCES['s_cannon_minus_png'],RESOURCES['s_cannon_minus_down_png'], this.changeCannon(false));
    this.plus = Tiny.ImageButton(RESOURCES['s_cannon_plus_png'],RESOURCES['s_cannon_minus_plus_png'], this.changeCannon(true));
    this.cannon = new Tiny.Sprite(Tiny.Texture.fromImage(RESOURCES['s_cannon1_png']));
    this.renderSprite();

    //设置当前layer可点击
    this.interactive = true;
    this.minus.touchstart = this.minus.mousedown = function (e) {
      debugger;
      console.log(22);
    }
  }
  renderSprite () {
    /*炮架不在正中间 左右多减了了些*/
    this.cannonHolder.setPosition(Tiny.WIN_SIZE.width/2-850/2, Tiny.WIN_SIZE.height- 72);
    this.minus.setPosition(-this.minus.width/2, Tiny.WIN_SIZE.height- 31);
    this.plus.setPosition(Tiny.WIN_SIZE.width/2+140/2, Tiny.WIN_SIZE.height- 31);
    this.cannon.setPosition(Tiny.WIN_SIZE.width/2-58/2, Tiny.WIN_SIZE.height- 60);

    this.addChild(this.cannonHolder);
    this.addChild(this.minus);
    this.addChild(this.plus);
    this.addChild(this.cannon);
  }
  changeCannon (plus) {
    if (plus) {
      if (this.currentCannon < 7) {
        this.currentCannon ++;
      }
    } else {
      if (this.currentCannon > 1) {
        this.currentCannon --;
      }
    }
    this.cannonHolder = new Tiny.Sprite(Tiny.Texture.fromImage(RESOURCES['s_cannon' + this.currentCannon + '_png']));
  }
}
BottomDeck.create = () => {
  return new BottomDeck();
}

export default BottomDeck;
