
import BackgroundScene from './backGround';
import BottomDeck from './BottomDeck';

class StartLayer extends Tiny.Container {
  constructor () {
    super();
    this.background = BackgroundScene.create();
    this.bottomDeck = BottomDeck.create();
    this.addChild(this.background);
    this.addChild(this.bottomDeck);

    //设置当前layer可点击
    this.interactive = true;

  }
}

export default StartLayer;
