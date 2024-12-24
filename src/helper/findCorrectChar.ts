export default function findCorrectChar(
  string: string,
  rule: RegExp,
  startIndex: number
) {
  let index = startIndex;

  do {
    if (rule.test(string[index])) {
      const char = string[index];
      index++;

      return { char, index };
    }

    index++;
  } while (string[index]);

  return {};
}
