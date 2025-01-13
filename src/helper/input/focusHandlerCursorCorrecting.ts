import { EMPTY_CHAR } from "../../contants";
import { InputChangeEvent } from "../../types/input";

export default function focusHandlerCursorCorrecting(
  newValue: string,
  value: string,
  event: InputChangeEvent
) {
  const index = (newValue || value).indexOf(EMPTY_CHAR);

  if (index >= 0) {
    setTimeout(() => {
      event.target.selectionStart = index;
      event.target.selectionEnd = index;
    });
  }
}
