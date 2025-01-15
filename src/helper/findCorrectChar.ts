import { isMaskChar } from "./mask";

export default function findCorrectChar(
  string: string,
  rule: RegExp,
  startIndex: number
) {
  let index = startIndex;

  do {
    const char = string[index];
    const charIsCorrect = rule.test(char);

    //console.log(char, index, isMaskChar(char, index))

    if (charIsCorrect && !isMaskChar(char, index)) {
      index++;

      return { char, index };
    }

    index++;
  } while (string[index]);

  return {};
}
