import { ChangeEvent, FocusEvent, MouseEvent, KeyboardEvent } from "react";

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
export type InputFocusEvent = FocusEvent<HTMLInputElement>;
export type InputMouseEvent = MouseEvent<HTMLInputElement>;
export type InputKeyboardEvent = KeyboardEvent<HTMLInputElement>;

export type OnChangeInputType = (event: InputChangeEvent) => void;

export type OnFocusInputType = (event: InputFocusEvent) => void;

export type OnClickInputType = (event: InputMouseEvent) => void;

export type OnKeyDownInputType = (event: InputKeyboardEvent) => void;

export type DefaultInputValue = string | null;
