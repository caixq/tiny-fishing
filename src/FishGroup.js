import Fish from './Fish';

class FishGroup {
  constructor (parent) {
    this._parent = parent;
    this._fishes = [];
  }
  add () {
    for (var i = 1;i<6;i++) {
      this._fishes.push(new Fish(i, this._parent));
      this._parent.addChild(this._fishes[i - 1]);
      this._fishes[i-1].play();
    }
  }
  hasFishAttached (toX, toY) {
    for (var i=0;i<this._fishes.length; i++) {
      this._fishes[i].isCollision(toX, toY);
    }
  }

}
export default FishGroup;
