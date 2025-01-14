import Index from "../Index";
import ValueCharCheksConstructor, { ValueCharCheks } from "./ValueCharCheks";

export default function combiningValueWithMask(
  value: string,
  maskString: string
): string {
  const indexContext = new Index();

  const maskArrMapCallback = (maskChar: string) => {
    const valueChar = value[indexContext.index];

    const context = {
      valueChar,
      maskChar,
      value,
      indexContext,
    };

    const valueCharCheks: ValueCharCheks = new ValueCharCheksConstructor(context);
    for (const key in valueCharCheks) {
      const result = valueCharCheks[key]();

      if (result) return result;
    }

    return maskChar;
  };

  return maskString.split("").map(maskArrMapCallback).join("");
}
