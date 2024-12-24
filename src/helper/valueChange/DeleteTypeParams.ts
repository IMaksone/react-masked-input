import { SetIndex, ValueParams } from "../../types/common";
import { EMPTY_CHAR } from "../../maskedInput/contants";
import { isMaskChar } from "../mask";
import INPUT_TYPES from "../../enums/inputTypes";

export interface DeleteTypeParamsContext {
  start: number;
  maskString: string;
  maskedNewValue: string;
  inputType: INPUT_TYPES;
}

interface DeleteTypeParams extends ValueParams {}

class DeleteTypeParams {
  private maskString: string;
  private maskedNewValue: string;

  constructor({
    start,
    maskString,
    maskedNewValue,
    inputType,
  }: DeleteTypeParamsContext) {
    this.maskString = maskString;
    this.maskedNewValue = maskedNewValue;

    this.start = start;

    if (inputType === INPUT_TYPES.DELETE_CONTENT_BACKWARD)
      this.deleteContentBackward();

    this.replacedNewValue = maskedNewValue;
    this.start = start;
    this.end = start;
  }

  private deleteContentBackward() {
    if (this.isNeedReverse()) this.reverseFindingNoMaskChar();
  }

  private isNeedReverse() {
    const { start, maskString, maskedNewValue } = this;

    return (
      start > 0 &&
      !isMaskChar(maskString, start) &&
      maskedNewValue[start] === EMPTY_CHAR
    );
  }

  private reverseFindingNoMaskChar() {
    const { start, maskString, maskedNewValue } = this;

    for (let index = start - 1; index >= 0; index--) {
      if (maskedNewValue[index] === EMPTY_CHAR) {
        this.start = index + 1;
      } else if (!isMaskChar(maskString, index)) {
        this.start = index + 1;
        break;
      }
    }
  }
}

export default DeleteTypeParams;
