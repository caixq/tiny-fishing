
import BackgroundScene from './backGround';
import BottomDeck from './BottomDeck';
import Fish from './Fish';

class StartLayer extends Tiny.Container {
  constructor () {
    super();
    this.currentBullet = 1;
    this.background = BackgroundScene.create();
    this.bottomDeck = BottomDeck.create();
    this.fish = Fish.create();
    this.addChild(this.background);
    this.addChild(this.bottomDeck);
    this.addChild(this.fish);

    //设置当前layer可点击
    this.interactive = true;
    var self = this;
    this.tap = this.mouseup = function (e) {
      var x = e.data.global.x;
      var y = e.data.global.y;
      self.bottomDeck.shotBullet(x,y);
    }
  }
}

export default StartLayer;
