import INPUT_TYPES from "../../enums/inputTypes";
import { ValueParams } from "../../types/common";
import DeleteTypeParams, { DeleteTypeParamsContext } from "./DeleteTypeParams";
import InsertTypeParams, { InsertTypeParamsContext } from "./InsertTypeParams";
import PasteTypeParams, { PasteTypeParamsContext } from "./PasteTypeParams";

type Handler = () => ValueParams;

export type InputTypeMethodsContext = DeleteTypeParamsContext &
  PasteTypeParamsContext &
  InsertTypeParamsContext & {};

type Methods = {
  [key in INPUT_TYPES]: Handler;
};

interface InputTypeMethods extends Methods {}

class InputTypeMethods {
  constructor(context: InputTypeMethodsContext) {
    this.deleteContentBackward = () => new DeleteTypeParams(context);
    this.deleteByCut = () => new DeleteTypeParams(context);
    this.insertFromPaste = () => new PasteTypeParams(context);
    this.insertCompositionText = () => new InsertTypeParams(context);
    this.insertText = () => new InsertTypeParams(context);
  }
}

export default InputTypeMethods;
