import { createMaskString } from "../mask";
import valueChange from "../valueChange";
import { InputChangeEvent } from "../../types/input";
import { InputHandlersContext } from ".";

export type ChangeHandlerContext = Pick<
  InputHandlersContext,
  "mask" | "value" | "setDefaultValue" | "setValue" | "onChange" | "setCursor"
>;

export default function changeHandler(
  this: ChangeHandlerContext,
  event: InputChangeEvent
) {
  const { mask, value, setDefaultValue, setValue, onChange, setCursor } = this;

  setDefaultValue(null);

  const inputType = (event.nativeEvent as any)?.inputType;
  const input = event.target;
  const newValue = input.value;

  const newMaskString = createMaskString(mask, newValue);

  const { replacedNewValue, start, end } = valueChange(
    value,
    newValue,
    newMaskString,
    inputType
  );

  event.target.value = replacedNewValue;
  setValue(replacedNewValue);

  input.selectionStart = start;
  input.selectionEnd = end;

  setCursor(input, [start, end]);

  onChange?.(event);
}
