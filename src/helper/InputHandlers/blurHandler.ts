import { InputHandlersContext } from "./types";
import { InputFocusEvent } from "../../types/input";
import reservedCharactersToEmptyChar from "../reservedCharactersToEmptyChar";

type BlurHandlerContext = Pick<
  InputHandlersContext,
  "maskString" | "setDefaultValue" | "setValue" | "onBlur"
>;

export default function blurHandler(
  this: BlurHandlerContext,
  event: InputFocusEvent
) {
  const { maskString, setDefaultValue, setValue, onBlur } = this;

  setDefaultValue(null);

  // если в поле пустая маска не показываем ее
  if (reservedCharactersToEmptyChar(maskString) === event.target.value) {
    event.target.value = "";

    setValue("");
  }

  onBlur?.(event);
}
