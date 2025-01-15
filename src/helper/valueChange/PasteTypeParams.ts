import { ValueParams } from "../../types/common";
import { EMPTY_CHAR } from "../../contants";

export type PasteTypeParamsContext = {
  end: number;
  maskString: string;
  maskedNewValue: string;
};

interface PasteTypeParams extends ValueParams {}

class PasteTypeParams implements ValueParams {
  constructor({ end, maskedNewValue }: PasteTypeParamsContext) {
    const emptyCharPosition = maskedNewValue.indexOf(EMPTY_CHAR) - 1;

    if (emptyCharPosition >= 0) {
      this.end = emptyCharPosition;
    }

    this.end += 2;

    this.replacedNewValue = maskedNewValue;
    this.start = end;
    this.end = end;
  }
}

export default PasteTypeParams;
