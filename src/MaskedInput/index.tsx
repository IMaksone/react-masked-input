import React, { useMemo } from "react";

import { createMaskString } from "../helper/mask";
import { useSetCursor } from "../hooks/useSetCursor";
import { useDefaultValue } from "../hooks/useDefaultValue";
import { InputWithMaskType } from "./types";
import InputHandlers from "../helper/InputHandlers";

const InputWithMask: InputWithMaskType = ({
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
  setValue,
  onChange,
  onFocus,
  onBlur,
  onClick,
  onKeyDown,
}) => {
  const maskString = useMemo(
    () => createMaskString(mask, value),
    [mask, value]
  );

  const setCursor = useSetCursor();

  const [defaultValue, setDefaultValue] = useDefaultValue(value, maskString);

  const inputHandlersContext = {
    mask,
    maskString,
    defaultValue,
    value,
    setDefaultValue,
    setValue,
    onChange,
    onFocus,
    onBlur,
    setCursor,
  };

  const { changeHandler, focusHandler, blurHandler } = new InputHandlers(
    inputHandlersContext
  );

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
