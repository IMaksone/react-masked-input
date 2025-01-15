import IndexManager from "../IndexManager";
import ValueCharCheksConstructor, { ValueCharCheks } from "./ValueCharCheks";

export default function combiningValueWithMask(
  value: string,
  maskString: string
): string {
  const indexManager = new IndexManager();

  const maskArrMapCallback = (maskChar: string) => {
    const valueChar = value[indexManager.index];

    const context = {
      valueChar,
      maskChar,
      value,
      indexManager,
    };

    const valueCharCheks: ValueCharCheks = new ValueCharCheksConstructor(
      context
    );
    for (const key in valueCharCheks) {
      const result = valueCharCheks[key]();

      if (result) return result;
    }

    return maskChar;
  };

  return maskString.split("").map(maskArrMapCallback).join("");
}
