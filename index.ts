import { LineList, cdr, car, cons } from "./lineList.ts";
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
    return cons(value, null);
  } else {
    return cons(car(lineList), push(cdr(lineList), value));
  }
}
