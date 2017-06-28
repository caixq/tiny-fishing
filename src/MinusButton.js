import Button from './Button2';
import RESOURCES from './Resource';

class MinusButton extends Button {
  constructor (parent) {
    var _cannon = parent._cannon;
    super(RESOURCES['s_cannon_minus_png'], RESOURCES['s_cannon_minus_down_png'], _cannon.changeCannon(false));
    this._parent = parent;
    this.setPosition(Tiny.WIN_SIZE.width/2 - 100, Tiny.WIN_SIZE.height- 31);
  }
}
export default MinusButton;

