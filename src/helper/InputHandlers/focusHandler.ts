import { InputHandlersContext } from "./types";
import { InputFocusEvent } from "../../types/input";
import focusHandlerCursorCorrecting from "./focusHandlerCursorCorrecting";
import getFocusHandlerNewValue from "./getFocusHandlerNewValue";

export type FocusHandlerContext = Pick<
  InputHandlersContext,
  | "maskString"
  | "defaultValue"
  | "value"
  | "setDefaultValue"
  | "setValue"
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
    setValue,
    onFocus,
  } = this;

  setDefaultValue(null);

  const newValue = getFocusHandlerNewValue(value, defaultValue, maskString);

  event.target.value = newValue;

  setValue(newValue);

  focusHandlerCursorCorrecting(newValue, value, event);

  onFocus?.(event);
}
