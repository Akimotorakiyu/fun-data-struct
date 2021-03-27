import {
  LineList,
  cdr,
  car,
  cons,
  EmptyLineList,
  NotEmptyLineList,
  isEmptyLineList,
  isNotEmptyLineList,
  emptyLineList,
} from "./lineList.ts";

export * from "./lineList.ts";

export function len<T>(lineList: LineList<T>): number {
  if (isEmptyLineList(lineList)) {
    return 0;
  } else {
    return 1 + len(cdr(lineList));
  }
}

export function push<T>(lineList: LineList<T>, value: T): NotEmptyLineList<T> {
  if (isEmptyLineList(lineList)) {
    return cons(value, null);
  } else {
    return cons(car(lineList), push(cdr(lineList), value));
  }
}

export function unshift<T>(
  lineList: LineList<T>,
  value: T
): NotEmptyLineList<T> {
  return cons(value, lineList);
}

export function shift<T>(lineList: LineList<T>): LineList<T> {
  if (isEmptyLineList(lineList)) {
    return emptyLineList;
  } else {
    return cdr(lineList);
  }
}

export function pop<T>(lineList: LineList<T>): LineList<T> {
  if (isEmptyLineList(lineList) || isEmptyLineList(cdr(lineList))) {
    return null;
  } else {
    return cons(car(lineList), pop(cdr(lineList)));
  }
}
