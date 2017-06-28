
import ShotLayer from './ShotLayer';
import ControlLayer from './ControlLayer';
import BackGround from './BackGround';

class StartLayer extends Tiny.Container {
  constructor () {

    super();

    this.currentPower = 1;

    //设置当前layer可点击
    this.interactive = true;

    this._backgound = BackGround.create();

    this._shotLayer = new ShotLayer(this);

    this._controlLayer = new ControlLayer(this);

    this._shotLayer.setEventEnabled(true);

    this.init();
    // this.tap = this.mouseup = function () {
    //   console.log(666);
    // }
  }
  init () {
    this.addChild(this._backgound);
    this.addChild(this._shotLayer);
    this.addChild(this._controlLayer);

  }
}

export default StartLayer;
