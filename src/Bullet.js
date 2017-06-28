/* eslint-disable */
import RESOURCES from './Resource';

class Bullet extends Tiny.Sprite {
  constructor(parent) {
    var texture = Tiny.Texture.fromImage(RESOURCES['s_bullet' + parent._parent.currentPower + '_png']);
    super(texture);
    this._parent = parent;
    this.setPosition(Tiny.WIN_SIZE.width/2,999999);  //放到屏幕之外
    this.setAnchor(0.5);
  }
  shotBullet () {
    console.log(222);
  }
}


export default Bullet;
