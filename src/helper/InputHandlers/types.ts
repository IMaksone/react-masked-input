import {
  DefaultInputValue,
  OnChangeInputType,
  OnFocusInputType,
  SetDefaultInputValue,
  SetValue,
} from "../../types/input";
import { SetCursor } from "../../types/setCursor";
import { Mask } from "../../types/mask";

export type InputHandlersContext = {
  mask: Mask;
  maskString: string;
  defaultValue: DefaultInputValue;
  value: string;
  setDefaultValue: SetDefaultInputValue;
  setValue: SetValue;
  onChange?: OnChangeInputType;
  onFocus?: OnFocusInputType;
  onBlur?: OnFocusInputType;
  setCursor: SetCursor;
};
