import React, { RefObject, useEffect, useMemo, useState } from "react";

import { createMaskString } from "../helper/mask";
import valueChange from "../helper/valueChange";
import { GetMaskType } from "../types/getMaskType";
import combiningValueWithMask from "../helper/combiningValueWithMask";
import reservedCharactersToEmptyChar from "../helper/reservedCharactersToEmptyChar";
import { EMPTY_CHAR } from "../contants";
import {
  DefaultInputValue,
  OnChangeInputType,
  OnClickInputType,
  OnFocusInputType,
  OnKeyDownInputType,
} from "../types/input";
import { useSetCursor } from "../hooks/useSetCursor";
import { useDefaultValue } from "../hooks/useDefaultValue";
import { FunctionBody } from "typescript";
import getFocusHandlerNewValue from "../helper/input/getFocusHandlerNewValue";
import focusHandlerCursorCorrecting from "../helper/input/focusHandlerCursorCorrecting";

export interface InputMaskInterface {
  mask: string | GetMaskType;
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
}

const InputWithMask = ({
  mask,
  inputRef,
  id,
  className,
  name,
  type,
  value,
  disabled,
  autoComplete,
  autoFocus,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  onClick,
  onKeyDown,
}: InputMaskInterface) => {
  const maskString = useMemo(
    () => createMaskString(mask, value),
    [mask, value]
  );

  const setCursor = useSetCursor();

  const [defaultValue, setDefaultValue] = useDefaultValue(value, maskString);

  const changeHandler: OnChangeInputType = (event) => {
    setDefaultValue(null);

    const inputType = (event.nativeEvent as any)?.inputType;
    const input = event.target;
    const newValue = input.value;

    const newMaskString = createMaskString(mask, newValue);

    const { replacedNewValue, start, end } = valueChange(
      value,
      newValue,
      newMaskString,
      inputType
    );

    event.target.value = replacedNewValue;
    onChange(event);

    input.selectionStart = start;
    input.selectionEnd = end;

    setCursor(input, [start, end]);
  };

  const focusHandler: OnFocusInputType = (event) => {
    setDefaultValue(null);

    const newValue = getFocusHandlerNewValue(value, defaultValue, maskString);

    event.target.value = newValue;

    onChange(event);

    focusHandlerCursorCorrecting(newValue, value, event)

    if (onFocus) {
      onFocus(event);
    }
  };

  const blurHandler: OnFocusInputType = (event) => {
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
  };

  return (
    <input
      value={defaultValue || value}
      onChange={changeHandler}
      onFocus={focusHandler}
      onBlur={blurHandler}
      ref={inputRef}
      id={id}
      className={className}
      name={name}
      type={type}
      disabled={disabled}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      readOnly={readOnly}
      onClick={onClick}
      onKeyDown={onKeyDown}
    />
  );
};

export default InputWithMask;
