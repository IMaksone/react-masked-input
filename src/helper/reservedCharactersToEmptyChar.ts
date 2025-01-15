import { EMPTY_CHAR, MASK_RULES } from "../rules";

// $$$$ -> ____
export default function reservedCharactersToEmptyChar(maskString: string) {
  const mapCallback = (char: string) => (MASK_RULES[char] ? EMPTY_CHAR : char);

  return maskString.split("").map(mapCallback).join("");
}
