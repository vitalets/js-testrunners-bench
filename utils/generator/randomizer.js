/**
 * Pre-generates array of random values and returns it one by one
 */

class Randomizer {
  constructor() {
    this._values = [];
    this._index = -1;
  }
  seed(count) {
    for (let i = 0; i < count; i++) {
      this._values.push(Math.random());
    }
    this.reset();
  }
  reset() {
    this._index = -1;
  }
  getValue() {
    this._index = this._index < this._values.length - 1 ? this._index + 1 : 0;
    return this._values[this._index];
  }
}

module.exports = new Randomizer();
