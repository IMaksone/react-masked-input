import { DefaultInputValue } from "../../types/input";
import combiningValueWithMask from "../combiningValueWithMask";
import reservedCharactersToEmptyChar from "../reservedCharactersToEmptyChar";

export default function getFocusHandlerNewValue(
  value: string,
  defaultValue: DefaultInputValue,
  maskString: string
) {
  if (!value) {
    return reservedCharactersToEmptyChar(maskString);
  }
  if (defaultValue) {
    return combiningValueWithMask(value, maskString);
  }

  return "";
}
