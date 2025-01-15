import { EMPTY_CHAR } from "../rules";
import { Mask } from "../types/mask";
import replaceReservedCharactersWithEmptyChar from "./reservedCharactersToEmptyChar";

export const createMaskString = (mask: Mask, value: string) => {
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
