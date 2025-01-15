import INPUT_TYPES from "../../enums/inputTypes";
import combiningValueWithMask from "../combiningValueWithMask";
import InputTypeMethods from "./InputTypeMethods";
import PositionOfSelectedCharacters from '../PositionOfSelectedCharacters'

export default function valueChange(
  value: string,
  newValue: string,
  maskString: string,
  inputType: INPUT_TYPES
) {
  const maskedValue = combiningValueWithMask(value, maskString);
  const maskedNewValue = combiningValueWithMask(newValue, maskString);

  const noCombinedPosition = new PositionOfSelectedCharacters(
    maskedValue,
    newValue
  );

  const { start, end, setStart, setEnd } = new PositionOfSelectedCharacters(
    maskedValue,
    maskedNewValue
  );

  if (start < 0) {
    setStart(noCombinedPosition.start);
    setEnd(noCombinedPosition.end);
  }
  if (start < 0) {
    setStart(maskedValue.length);
    setEnd(maskedValue.length);
  }

  const methods = new InputTypeMethods({
    start,
    end,
    maskString,
    maskedNewValue,
    maskedValue,
    noCombinedPosition,
    inputType,
  });

  const result = methods[inputType]();

  return (
    result || {
      replacedNewValue: maskedNewValue,
      start,
      end: end + 1,
    }
  );
}
