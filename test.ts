import { LineList, len } from "./index.ts";

const lineList: LineList<number> = {
  value: 0,
  next: { value: 1, next: { value: 2, next: null } },
};

console.log(len(lineList));
