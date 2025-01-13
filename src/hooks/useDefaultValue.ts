import { Dispatch, useEffect, useState } from "react";

import combiningValueWithMask from "../helper/combiningValueWithMask";
import { DefaultInputValue } from "../types/input";


type DefaultValueState = [
  DefaultInputValue,
  Dispatch<React.SetStateAction<DefaultInputValue>>,
];

export const useDefaultValue = (
  value: string,
  maskString: string
): DefaultValueState => {
  const [defaultValue, setDefaultValue] = useState<string | null>("");

  useEffect(() => {
    if (value && defaultValue !== null) {
      setDefaultValue(combiningValueWithMask(value, maskString));
    }
  }, [defaultValue, value, maskString]);

  return [defaultValue, setDefaultValue];
};
