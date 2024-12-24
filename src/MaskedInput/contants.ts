export const EMPTY_CHAR = "_";
export const NO_EMPTY_CHAR_RUL = /^_/;

export const MASK_RULES: {
  [key: string]: RegExp;
} = {
  $: /[0-9]/,
  a: /[А-Яа-я]/,
  "*": /[А-Яа-я0-9]/,
  z: /[A-Za-z]/,
  "~": /[A-Za-z0-9]/,
};
