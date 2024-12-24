export type NextIndex = () => number;

export type SetIndex = (newIndex: number) => void;

export type Position = {
  start: number;
  end: number;
  setStart: SetIndex;
  setEnd: SetIndex;
};

export type ValueParams = {
  replacedNewValue: string;
  start: number;
  end: number;
};
