import { FC, RefObject } from "react";

import { Mask } from "../types/mask";
import {
  OnChangeInputType,
  OnClickInputType,
  OnFocusInputType,
  OnKeyDownInputType,
} from "../types/input";

export type InputWithMask = FC<{
  mask: Mask;
  inputRef?: RefObject<any> | null;
  id: string;
  className: string;
  name?: string;
  type?: string;
  value: string;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  autoFocus?: boolean;
  readOnly?: boolean;
  onChange: OnChangeInputType;
  onFocus?: OnFocusInputType;
  onBlur?: OnFocusInputType;
  onClick?: OnClickInputType;
  onKeyDown?: OnKeyDownInputType;
}>;
