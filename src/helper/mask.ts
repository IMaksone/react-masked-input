import { EMPTY_CHAR } from "../maskedInput/contants";
import { GetMaskType } from "../types/getMaskType";
import replaceReservedCharactersWithEmptyChar from "./reservedCharactersToEmptyChar";

export const createMaskString = (mask: string | GetMaskType, value: string) => {
  if (typeof mask === "function") {
    return mask(value);
  } else {
    return mask;
  }
};

// если символ по данному индексу является обязательным символом маски возвращаем true
export const isMaskChar = (maskString: string, index: number) => {
  const emtyMask = replaceReservedCharactersWithEmptyChar(maskString);

  return emtyMask[index] !== EMPTY_CHAR;
};
