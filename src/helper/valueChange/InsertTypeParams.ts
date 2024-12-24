import { Position, ValueParams } from "../../types/common";
import { EMPTY_CHAR } from "../../maskedInput/contants";
import reservedCharactersToEmptyChar from "../reservedCharactersToEmptyChar";

export type InsertTypeParamsContext = {
  start: number;
  end: number;
  maskedValue: string;
  maskString: string;
  maskedNewValue: string;
  noCombinedPosition: Position;
};

interface InsertTypeParams extends ValueParams {}

class InsertTypeParams {
  private maskedValue: string;
  private maskString: string;
  private maskedNewValue: string;
  private noCombinedPosition: Position;

  constructor({
    start,
    end,
    maskedValue,
    maskString,
    maskedNewValue,
    noCombinedPosition,
  }: InsertTypeParamsContext) {
    this.maskedValue = maskedValue;
    this.maskString = maskString;
    this.noCombinedPosition = noCombinedPosition;

    this.start = start;

    if (this.skipInsert()) return;

    this.successInsert();
    this.createParams(end, maskedNewValue);
  }

  private createParams(index: number, replacedNewValue: string) {
    this.replacedNewValue = replacedNewValue;
    this.start = index;
    this.end = index;
  }

  private skipInsert() {
    const start = this.noCombinedPosition.start;

    const minStart = reservedCharactersToEmptyChar(this.maskString).indexOf(
      EMPTY_CHAR
    );

    if (start >= 0 && start < minStart) {
      this.createParams(start, this.maskedValue);

      return true;
    }
  }

  private successInsert() {
    if (this.maskedNewValue[this.start] !== EMPTY_CHAR) {
      this.start++;
    }
  }
}

export default InsertTypeParams;
