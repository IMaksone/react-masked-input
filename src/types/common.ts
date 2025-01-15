import IndexManager from "src/helper/IndexManager";

export type Position = {
  startIndexManager: IndexManager;
  endIndexManager: IndexManager;
};

export type ValueParams = {
  replacedNewValue: string;
  start: number;
  end: number;
};
