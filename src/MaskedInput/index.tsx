import React, { RefObject, useEffect, useState } from "react";

import { createMaskString } from "../helper/mask";
import valueChange from "../helper/valueChange";
import { GetMaskType } from "../types/getMaskType";
import combiningValueWithMask from "../helper/combiningValueWithMask";
import reservedCharactersToEmptyChar from "../helper/reservedCharactersToEmptyChar";
import { EMPTY_CHAR } from "../contants";
import {
  OnChangeInputType,
  OnClickInputType,
  OnFocusInputType,
  OnKeyDownInputType,
} from "../types/input";
import { useSetCursor } from "../hooks/useSetCursor";

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
  onChange,
  value,
  onFocus,
  onBlur,
  inputRef,
  id,
  className,
  name,
  type,
  disabled,
  autoComplete,
  autoFocus,
  readOnly,
  onClick,
  onKeyDown,
}: InputMaskInterface) => {
  const maskString = createMaskString(mask, value);

  const setCursor = useSetCursor();

  const [defaultValue, setDefaultValue] = useState<string | null>("");
  const handleNullDefaultValue = () =>
    defaultValue !== null ? setDefaultValue(null) : undefined;

  useEffect(() => {
    if (value && defaultValue !== null) {
      setDefaultValue(combiningValueWithMask(value, maskString));
    }
  }, [value, defaultValue, value, mask]);

  const changeHandler: OnChangeInputType = (event) => {
    handleNullDefaultValue();

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

    // вызываем onChange
    event.target.value = replacedNewValue;
    onChange(event);

    input.selectionStart = start;
    input.selectionEnd = end;

    setCursor(input, [start, end]);
  };

  const focusHandler: OnFocusInputType = (event) => {
    handleNullDefaultValue();

    let newValue = "";

    if (!value) {
      // если input пустой добавляем маску и переносим курсор в начало
      newValue = reservedCharactersToEmptyChar(maskString);

      event.target.value = newValue;

      // вызываем onChange
      onChange(event);
    } else if (defaultValue) {
      // если есть defaultValue обновляем value с учетом маски и вызываем onChange
      newValue = combiningValueWithMask(value, maskString);

      event.target.value = newValue;

      // вызываем onChange
      onChange(event);
    }

    const index = (newValue || value).indexOf(EMPTY_CHAR);

    // сдвигаем курсор к первому пустому символу
    if (index >= 0) {
      setTimeout(() => {
        event.target.selectionStart = index;
        event.target.selectionEnd = index;
      });
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const blurHandler: OnFocusInputType = (event) => {
    handleNullDefaultValue();

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
