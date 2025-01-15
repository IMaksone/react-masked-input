import IndexManager from "./IndexManager";

interface PositionOfSelectedCharacters {
  startIndexManager: IndexManager;
  endIndexManager: IndexManager;
}

// ____ -> |11|__
class PositionOfSelectedCharacters {
  private maskedValue: string;
  private maskedNewValue: string;

  constructor(maskedValue: string, maskedNewValue: string) {
    this.maskedValue = maskedValue;
    this.maskedNewValue = maskedNewValue;
    this.startIndexManager = new IndexManager(-1);
    this.endIndexManager = new IndexManager(-1);

    this.definePositionForString();
  }

  private definePositionForString() {
    const maskedValueArr = this.maskedValue.split("");

    maskedValueArr.forEach((char, index) => {
      const charDoesNotFitMask = char !== this.maskedNewValue[index];

      if (charDoesNotFitMask) this.definePositionForChar(index);
    });
  }

  private definePositionForChar(index: number) {
    const { startIndexManager, endIndexManager } = this;

    if (startIndexManager.index < 0) {
      startIndexManager.setIndex(index);
    }

    endIndexManager.setIndex(index);
  }
}

export default PositionOfSelectedCharacters;
