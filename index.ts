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

export function getIndex<T>(
  lineList: LineList<T>,
  index: number
): T | undefined {
  if (isEmptyLineList(lineList) || index < 0) {
    return undefined;
  } else {
    return index === 0 ? car(lineList) : getIndex(cdr(lineList), index - 1);
  }
}

export function reverse<T>(lineList: LineList<T>) {
  if (isEmptyLineList(lineList)) {
    return emptyLineList;
  } else {
    return push(cdr(lineList), car(lineList));
  }
}

function _some<T>(
  lineList: LineList<T>,
  deal: (
    curIndex: number,
    curLineList: LineList<T>,
    srcLineList: LineList<T>
  ) => boolean,
  index: number,
  srclineList: LineList<T>
): boolean {
  if (isEmptyLineList(lineList)) {
    return false;
  } else {
    const res = deal(index, lineList, srclineList);
    if (res) {
      return true;
    } else {
      return _some(cdr(lineList), deal, index + 1, srclineList);
    }
  }
}

export function some<T>(
  lineList: LineList<T>,
  deal: (
    curIndex: number,
    curLineList: LineList<T>,
    srcLineList: LineList<T>
  ) => boolean
): boolean {
  return _some(lineList, deal, 0, lineList);
}

function _every<T>(
  lineList: LineList<T>,
  deal: (
    curIndex: number,
    curLineList: LineList<T>,
    srcLineList: LineList<T>
  ) => boolean,
  index: number,
  srclineList: LineList<T>
): boolean {
  if (isEmptyLineList(lineList)) {
    return true;
  } else {
    const res = deal(index, lineList, srclineList);
    if (res) {
      return _every(cdr(lineList), deal, index + 1, srclineList);
    } else {
      return false;
    }
  }
}

export function every<T>(
  lineList: LineList<T>,
  deal: (
    curIndex: number,
    curLineList: LineList<T>,
    srcLineList: LineList<T>
  ) => boolean
): boolean {
  return _every(lineList, deal, 0, lineList);
}

function _map<T, F>(
  lineList: LineList<T>,
  deal: (
    curIndex: number,
    curLineList: LineList<T>,
    srcLineList: LineList<T>
  ) => F,
  index: number,
  srclineList: LineList<T>
): LineList<F> {
  if (isEmptyLineList(lineList)) {
    return emptyLineList;
  } else {
    const a = deal(index, lineList, srclineList);
    const b = _map(cdr(lineList), deal, index + 1, srclineList);
    return cons(a, b);
  }
}

export function map<T, F>(
  lineList: LineList<T>,
  deal: (
    curIndex: number,
    curLineList: LineList<T>,
    srcLineList: LineList<T>
  ) => F
): LineList<F> {
  return _map(lineList, deal, 0, lineList);
}

export function toString<T>(
  lineList: LineList<T>,
  convert: (curLineList: LineList<T>) => string = (curLineList) => {
    return isNotEmptyLineList(curLineList)
      ? JSON.stringify(car(curLineList))
      : "";
  }
) {
  const stringArray: string[] = [];
  every(lineList, (index, curLineList) => {
    stringArray.push(convert(curLineList));
    return true;
  });

  return stringArray.join();
}
