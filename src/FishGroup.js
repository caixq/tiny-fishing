import Fish from './Fish';

class FishGroup {
  constructor (parent) {
    this._parent = parent;
    this._fishes = [];
  }
  add () {
    var fish = new Fish(1,55,37);
    this._fishes.push(fish);
    this._parent.addChild(fish);
    fish.play();
  }
}
export default FishGroup;
