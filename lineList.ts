export type EmptyLineList = null;
export const emptyLineList: EmptyLineList = null;

export function isEmptyLineList<T>(
  lineList: LineList<T>
): lineList is EmptyLineList {
  return lineList ? false : true;
}

export function isNotEmptyLineList<T>(
  lineList: LineList<T>
): lineList is NotEmptyLineList<T> {
  return lineList ? true : false;
}

export interface NotEmptyLineList<T> {
  value: T;
  next: LineList<T>;
}

export type LineList<T> = EmptyLineList | NotEmptyLineList<T>;

export function cons<T>(v0: T, v1: LineList<T> | T): NotEmptyLineList<T> {
  if (typeof v1 === "object") {
    return {
      value: v0,
      next: v1 as LineList<T>,
    };
  } else {
    return {
      value: v0,
      next: {
        value: v1,
        next: emptyLineList,
      },
    };
  }
}

export const connect = cons;

export function car<T>(lineList: NotEmptyLineList<T>): T {
  return lineList.value;
}

export const current = car;

export function cdr<T>(lineList: LineList<T>): LineList<T> {
  return isEmptyLineList(lineList) ? emptyLineList : lineList.next;
}

export const next = cdr;

export function setCar<T>(
  lineList: NotEmptyLineList<T>,
  value: T
): NotEmptyLineList<T> {
  return cons(value, cdr(lineList));
}

export function setCdr<T>(
  lineList: NotEmptyLineList<T>,
  value: LineList<T>
): NotEmptyLineList<T> {
  return cons(car(lineList), value);
}
