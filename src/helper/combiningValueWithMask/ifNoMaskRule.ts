import { EMPTY_CHAR, NO_EMPTY_CHAR_RUL, MASK_RULES } from "../../rules";
import findCorrectChar from "../findCorrectChar";
import IndexManager from "../IndexManager";
import { ValueCharCheksContext } from "./types";

type IfNoMaskRuleContext = Pick<
  ValueCharCheksContext,
  "valueChar" | "maskChar" | "value" | "indexManager"
>;

export default function ifNoMaskRule(this: IfNoMaskRuleContext) {
  const { maskChar } = this;

  const rule = MASK_RULES[maskChar];

  if (!rule) {
    check.apply(this);

    return maskChar;
  }
}

function check(this: IfNoMaskRuleContext) {
  const { valueChar, maskChar, value, indexManager } = this;

  if (maskChar === valueChar) {
    indexManager.nextIndex();
  } else if (valueChar === EMPTY_CHAR) {
    valueCharIsEmptyChar(value, indexManager);
  }
}

const valueCharIsEmptyChar = (value: string, indexManager: IndexManager) => {
  const correctChar = findCorrectChar(
    value,
    NO_EMPTY_CHAR_RUL,
    indexManager.index + 1
  );

  if (correctChar.char) {
    indexManager.setIndex(correctChar.index);
  }
};
