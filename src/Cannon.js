/* eslint-disable */
import RESOURCES from './Resource';

class Cannon extends Tiny.Sprite {
  constructor(parent) {

    var texture = Tiny.Texture.fromImage(RESOURCES['s_cannon' + parent._parent.currentPower + '_png']);
    super(texture);
    this._parent = parent;
    this.width = 58;
    this.height = 66;
    this.setPosition(Tiny.WIN_SIZE.width/2, Tiny.WIN_SIZE.height- 80/2);
    this.setAnchor(0.5);
  }

  changeCannon(plus) {
    var self = this;
    return function () {
      var current = self._parent._parent.currentPower;
      if (plus) {
        if (current < 7) {
          current++;
        }
      } else {
        if (current > 1) {
          current--;
        }
      }
      self._parent._parent.currentPower = current;
      self.texture = Tiny.Texture.fromImage(RESOURCES['s_cannon' + current + '_png']);
      //self.bullet.texture = Tiny.Texture.fromImage(RESOURCES['s_bullet' + self.currentPower + '_png']);
    }
  }
}

Cannon.create = function () {
  return new Cannon();
};

export default Cannon;
