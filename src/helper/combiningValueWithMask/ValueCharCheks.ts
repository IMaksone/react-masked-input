import ifCorrectValueChar from "./ifCorrectValueChar";
import ifNoMaskRule from "./ifNoMaskRule";
import ifNotCorrectValueChar from "./ifNotCorrectValueChar";
import ifNoValueChar from "./ifNoValueChar";
import { ValueCharCheksContext } from "./types";

export type ValueCharCheks = {
  ifNoValueChar: string | undefined;
  ifCorrectValueChar: string | undefined;
  ifNotCorrectValueChar: string | undefined;
  ifNoMaskRule: string | undefined;
};

export default function ValueCharCheksConstructor (
  this: ValueCharCheks,
  context: ValueCharCheksContext
) {
  this.ifNoValueChar = ifNoValueChar.bind(context);
  this.ifCorrectValueChar = ifCorrectValueChar.bind(context);
  this.ifNotCorrectValueChar = ifNotCorrectValueChar.bind(context);
  this.ifNoMaskRule = ifNoMaskRule.bind(context);
}
