import { SetIndex } from "../types/common";
import Index from "./Index";

interface PositionOfSelectedCharacters {
  start: number;
  end: number;
  setStart: SetIndex;
  setEnd: SetIndex;
}

// ____ -> |11|__
class PositionOfSelectedCharacters {
  private maskedValue: string;
  private maskedNewValue: string;
  private startIndex: Index;
  private endIndex: Index;

  constructor(maskedValue: string, maskedNewValue: string) {
    this.maskedValue = maskedValue;
    this.maskedNewValue = maskedNewValue;
    this.startIndex = new Index(-1);
    this.endIndex = new Index(-1);

    this.definePositionForString();

    this.start = this.startIndex.index;
    this.end = this.endIndex.index;
    this.setStart = this.startIndex.setIndex;
    this.setEnd = this.endIndex.setIndex;
  }

  private definePositionForChar(index: number) {
    const { startIndex, endIndex } = this;

    if (startIndex.index < 0) {
      startIndex.setIndex(index);
    }

    endIndex.setIndex(index);
  }

  private definePositionForString() {
    for (const [key, char] of this.maskedValue) {
      const index = +key;

      if (char !== this.maskedNewValue[index])
        this.definePositionForChar(index);
    }
  }
}

export default PositionOfSelectedCharacters;
