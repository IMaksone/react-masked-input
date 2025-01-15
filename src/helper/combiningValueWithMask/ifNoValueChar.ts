import { MASK_RULES, EMPTY_CHAR } from "../../rules";
import { ValueCharCheksContext } from "./types";

type IfNoValueCharContext = Pick<
  ValueCharCheksContext,
  "valueChar" | "maskChar"
>;

export default function ifNoValueChar(this: IfNoValueCharContext) {
  const { valueChar, maskChar } = this;

  if (!valueChar) return MASK_RULES[maskChar] ? EMPTY_CHAR : maskChar;
}
