export interface LineList<T> {
  value: T;
  next: LineList<T> | null;
}

export function len<T>(lineList: LineList<T> | null): number {
  if (!lineList) {
    return 0;
  } else {
    return 1 + len(lineList.next);
  }
}
