import INPUT_TYPES from "../../enums/inputTypes";
import combiningValueWithMask from "../combiningValueWithMask";
import InputTypeMethods from "./InputTypeMethods";
import PositionOfSelectedCharacters from "../PositionOfSelectedCharacters";

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

  const { startIndexManager, endIndexManager } =
    new PositionOfSelectedCharacters(maskedValue, maskedNewValue);

  if (startIndexManager.index < 0) {
    startIndexManager.setIndex(noCombinedPosition.startIndexManager.index);
    endIndexManager.setIndex(noCombinedPosition.endIndexManager.index);
  }
  if (startIndexManager.index < 0) {
    startIndexManager.setIndex(maskedValue.length);
    endIndexManager.setIndex(maskedValue.length);
  }

  const methods = new InputTypeMethods({
    start: startIndexManager.index,
    end: endIndexManager.index,
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
      start: startIndexManager.index,
      end: endIndexManager.index + 1,
    }
  );
}
