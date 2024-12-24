import { EMPTY_CHAR, MASK_RULES } from "../../maskedInput/contants";
import findCorrectChar from "../findCorrectChar";
import { ValueCharCheksContext } from "./types";

type IfNotCorrectValueCharContext = Pick<
  ValueCharCheksContext,
  "valueChar" | "maskChar" | "value" | "indexContext"
>;

export default function ifNotCorrectValueChar(
  this: IfNotCorrectValueCharContext
) {
  const { valueChar, maskChar, value, indexContext } = this;

  const rule = MASK_RULES[maskChar];

  if (rule && !rule.test(valueChar)) {
    const correctChar = findCorrectChar(value, rule, indexContext.index + 1);

    if (correctChar.char) {
      indexContext.setIndex(correctChar.index);

      return correctChar.char;
    }

    return EMPTY_CHAR;
  }
}
