import {
  LineList,
  len,
  cons,
  push,
  pop,
  shift,
  unshift,
  getIndex,
  map,
  toString,
} from "./index.ts";

const lineList: LineList<number> = cons(0, cons(1, cons(2, cons(3, null))));

console.log(toString(lineList), "len", len(lineList));

const lineList2 = push(push(push(null, 0), 1), 2);

console.log(toString(lineList2));
console.log(toString(pop(lineList2)));
console.log(toString(shift(lineList2)));
console.log(toString(unshift(lineList2, -1)));
console.log(getIndex(lineList2, 2));
console.log(getIndex(lineList2, 6));
console.log(getIndex(lineList2, -1));

console.log("toString", toString(lineList2));
