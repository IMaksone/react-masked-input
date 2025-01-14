import changeHandler from "./changeHandler";
import focusHandler from "./focusHandler";
import blurHandler from "./blurHandler";
import {
  DefaultInputValue,
  OnChangeInputType,
  OnFocusInputType,
  SetDefaultInputValue,
} from "../../types/input";
import { SetCursor } from "../../types/setCursor";
import { Mask } from "../../types/mask";

export type InputHandlersContext = {
  mask: Mask ;
  maskString: string;
  defaultValue: DefaultInputValue;
  value: string;
  setDefaultValue: SetDefaultInputValue;
  onChange: OnChangeInputType;
  onFocus?: OnFocusInputType;
  onBlur?: OnFocusInputType;
  setCursor: SetCursor;
};

interface InputHandlers {
  changeHandler: typeof changeHandler;
  focusHandler: typeof focusHandler;
  blurHandler: typeof blurHandler;
}

class InputHandlers {
  constructor(context: InputHandlersContext) {
    this.changeHandler = changeHandler.bind(context);
    this.focusHandler = focusHandler.bind(context);
    this.blurHandler = blurHandler.bind(context);
  }
}

export default InputHandlers;
