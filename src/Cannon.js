/* eslint-disable */
import RESOURCES from './Resource';

class Cannon {
  constructor () {}
  init () {
    var texture = Tiny.Texture.fromImage(RESOURCES['s_cannon1_png']);
    var cannonBody = new Tiny.Sprite(texture);
    cannonBody.width = 58;
    cannonBody.height = 66;
    cannonBody.setPosition(Tiny.WIN_SIZE.width/2-58/2, Tiny.WIN_SIZE.height- 60);
    return cannonBody;
  }
}


Cannon.create = function () {
  var cannon = new Cannon();
  return cannon.init();
};

export default Cannon;
