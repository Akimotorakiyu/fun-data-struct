import { LineList, cdr, car } from "./lineList.ts";
export * from "./lineList.ts";
export function len<T>(lineList: LineList<T> | null): number {
  if (!lineList) {
    return 0;
  } else {
    return 1 + len(cdr(lineList));
  }
}

export function push<T>(lineList: LineList<T> | null, value: T): LineList<T> {
  if (!lineList) {
    return {
      value,
      next: null,
    };
  } else {
    lineList.next = push(lineList.next, value);
    return lineList;
  }
}
