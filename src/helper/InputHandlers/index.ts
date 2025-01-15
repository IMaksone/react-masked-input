import changeHandler from "./changeHandler";
import focusHandler from "./focusHandler";
import blurHandler from "./blurHandler";
import { InputHandlersContext } from "./types";

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
