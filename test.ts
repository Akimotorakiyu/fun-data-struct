import { LineList, len, cons, push } from "./index.ts";

const lineList: LineList<number> = cons(0, cons(1, cons(2, cons(3, null))));

console.log(len(lineList));

const lineList2 = push(push(push(null, 0), 1), 2);

console.log(len(lineList2));
