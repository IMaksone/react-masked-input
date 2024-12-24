export default class Index {
  index: number;

  constructor(startIndex: number = 0) {
    this.index = startIndex;
  }

  nextIndex() {
    return this.index++;
  }

  setIndex(newIndex: number) {
    return (this.index = newIndex);
  }
}
