import { MASK_RULES } from "../../contants";
import { ValueCharCheksContext } from "./types";

type IfCorrectValueCharContext = Pick<
  ValueCharCheksContext,
  "valueChar" | "maskChar" | "indexContext"
>;

export default function ifCorrectValueChar(this: IfCorrectValueCharContext) {
  const { valueChar, maskChar, indexContext } = this;

  if (MASK_RULES[maskChar]?.test(valueChar)) {
    indexContext.nextIndex();
    return valueChar;
  }
}
