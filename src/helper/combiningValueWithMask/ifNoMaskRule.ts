import {
  EMPTY_CHAR,
  NO_EMPTY_CHAR_RUL,
  MASK_RULES,
} from "../../maskedInput/contants";
import findCorrectChar from "../findCorrectChar";
import Index from "../Index";
import { ValueCharCheksContext } from "./types";

type OfIfNoMaskRuleContext = Pick<
  ValueCharCheksContext,
  "valueChar" | "maskChar" | "value" | "indexContext"
>;

export default function ifNoMaskRule(this: OfIfNoMaskRuleContext) {
  const { maskChar } = this;

  const rule = MASK_RULES[maskChar];

  if (!rule) {
    check.apply(this);

    return maskChar;
  }
}

function check(this: OfIfNoMaskRuleContext) {
  const { valueChar, maskChar, value, indexContext } = this;

  if (maskChar === valueChar) {
    indexContext.nextIndex();
  } else if (valueChar === EMPTY_CHAR) {
    valueCharIsEmptyChar(value, indexContext);
  }
}

const valueCharIsEmptyChar = (value: string, indexContext: Index) => {
  const correctChar = findCorrectChar(
    value,
    NO_EMPTY_CHAR_RUL,
    indexContext.index + 1
  );

  if (correctChar.char) {
    indexContext.setIndex(correctChar.index);
  }
};
