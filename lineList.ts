export interface LineList<T> {
  value: T;
  next: LineList<T> | null;
}

export function cons<T>(v0: T, v1: LineList<T> | null | T): LineList<T> {
  if (typeof v1 === "object") {
    return {
      value: v0,
      next: v1 as LineList<T> | null,
    };
  } else {
    return {
      value: v0,
      next: {
        value: v1,
        next: null,
      },
    };
  }
}

export const connect = cons;

export function car<T>(lineList: LineList<T>): T {
  return lineList.value;
}

export const current = car;

export function cdr<T>(lineList: LineList<T> | null): LineList<T> | null {
  if (!lineList) {
    return null;
  } else {
    return lineList.next;
  }
}

export const next = cdr;
