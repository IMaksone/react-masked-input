import { InputHandlersContext } from ".";
import { InputFocusEvent } from "../../types/input";
import reservedCharactersToEmptyChar from "../reservedCharactersToEmptyChar";

type BlurHandlerContext = Pick<
  InputHandlersContext,
  "maskString" | "setDefaultValue" | "onChange" | "onBlur"
>;

export default function blurHandler(
  this: BlurHandlerContext,
  event: InputFocusEvent
) {
  const { maskString, setDefaultValue, onChange, onBlur } = this;

  setDefaultValue(null);

  // если в поле пустая маска не показываем ее
  if (reservedCharactersToEmptyChar(maskString) === event.target.value) {
    event.target.value = "";

    // вызываем onChange
    onChange(event);
  }

  if (onBlur) {
    onBlur(event);
  }
}