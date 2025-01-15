import { EMPTY_CHAR, MASK_RULES } from "../../rules";
import findCorrectChar from "../findCorrectChar";
import { ValueCharCheksContext } from "./types";

type IfNotCorrectValueCharContext = Pick<
  ValueCharCheksContext,
  "valueChar" | "maskChar" | "value" | "indexManager"
>;

export default function ifNotCorrectValueChar(
  this: IfNotCorrectValueCharContext
) {
  const { valueChar, maskChar, value, indexManager } = this;

  const rule = MASK_RULES[maskChar];

  if (rule && !rule.test(valueChar)) {
    const correctChar = findCorrectChar(value, rule, indexManager.index);

    if (correctChar.char) {
      indexManager.setIndex(correctChar.index);

      return correctChar.char;
    }

    return EMPTY_CHAR;
  }
}
