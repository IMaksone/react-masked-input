import { FC, RefObject } from "react";

import { Mask } from "../types/mask";
import {
  OnChangeInputType,
  OnClickInputType,
  OnFocusInputType,
  OnKeyDownInputType,
  SetValue,
} from "../types/input";

export type InputWithMaskType = FC<{
  mask: Mask;
  inputRef?: RefObject<any> | null;
  id?: string;
  className?: string;
  name?: string;
  type?: string;
  value: string;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  autoFocus?: boolean;
  readOnly?: boolean;
  setValue: SetValue;
  onChange?: OnChangeInputType;
  onFocus?: OnFocusInputType;
  onBlur?: OnFocusInputType;
  onClick?: OnClickInputType;
  onKeyDown?: OnKeyDownInputType;
}>;
