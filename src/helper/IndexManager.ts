export default class IndexManager {
  #index: number;

  constructor(startIndex = 0) {
    this.index = startIndex;
  }

  nextIndex() {
    return this.index++;
  }

  setIndex(newIndex: number) {
    this.index = newIndex

    return newIndex;
  }

  get index() {
    return this.#index;
  }
  set index(newIndex: number) {
    this.#index = newIndex;
  }
}
