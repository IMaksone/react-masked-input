import { MASK_RULES } from "../../rules";
import { ValueCharCheksContext } from "./types";

type IfCorrectValueCharContext = Pick<
  ValueCharCheksContext,
  "valueChar" | "maskChar" | "indexManager"
>;

export default function ifCorrectValueChar(this: IfCorrectValueCharContext) {
  const { valueChar, maskChar, indexManager } = this;

  if (MASK_RULES[maskChar]?.test(valueChar)) {
    indexManager.nextIndex();
    return valueChar;
  }
}
