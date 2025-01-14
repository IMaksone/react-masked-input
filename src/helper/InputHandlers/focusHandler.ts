import { InputHandlersContext } from ".";
import { InputFocusEvent } from "../../types/input";
import focusHandlerCursorCorrecting from "./focusHandlerCursorCorrecting";
import getFocusHandlerNewValue from "./getFocusHandlerNewValue";

export type FocusHandlerContext = Pick<
  InputHandlersContext,
  | "maskString"
  | "defaultValue"
  | "value"
  | "setDefaultValue"
  | "onChange"
  | "onFocus"
>;

export default function focusHandler(
  this: FocusHandlerContext,
  event: InputFocusEvent
) {
  const {
    maskString,
    defaultValue,
    value,
    setDefaultValue,
    onChange,
    onFocus,
  } = this;

  setDefaultValue(null);

  const newValue = getFocusHandlerNewValue(value, defaultValue, maskString);

  event.target.value = newValue;

  onChange(event);

  focusHandlerCursorCorrecting(newValue, value, event);

  if (onFocus) {
    onFocus(event);
  }
}
