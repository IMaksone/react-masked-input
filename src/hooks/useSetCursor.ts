import { useCallback, useEffect, useState } from "react";

import { SetCursor } from "../types/setCursor";

export const useSetCursor = (): SetCursor => {
  const [cursor, setCursor] = useState<any>({
    inputRef: null,
    position: [0, 0],
  });

  useEffect(() => {
    cursor.input?.setSelectionRange(cursor.position[0], cursor.position[1]);
  }, [cursor]);

  return useCallback(
    (inputRef, position) => setCursor({ inputRef, position }),
    [setCursor]
  );
};
