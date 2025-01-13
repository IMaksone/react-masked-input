import { ChangeEvent, FocusEvent, MouseEvent, KeyboardEvent } from "react";

export type OnChangeInputType = (event: ChangeEvent<HTMLInputElement>) => void

export type  OnFocusInputType = (event: FocusEvent<HTMLInputElement>) => void 

export type  OnClickInputType = (event: MouseEvent<HTMLInputElement>) => void 

export type  OnKeyDownInputType = (event: KeyboardEvent<HTMLInputElement>) => void 