import { useEffect, useState } from "react";

export const useSetCursor = () => {
  const [cursor, setCursor] = useState<any>({
    inputRef: null,
    position: [0, 0],
  });

  useEffect(() => {
    cursor.input?.setSelectionRange(cursor.position[0], cursor.position[1]);
  }, [cursor]);

  return (
    inputRef: EventTarget & HTMLInputElement,
    position: [number, number]
  ) => setCursor({ inputRef, position });
};
