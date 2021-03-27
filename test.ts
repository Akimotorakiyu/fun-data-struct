import { LineList, len, cons } from "./index.ts";

const lineList: LineList<number> = cons(0, cons(1, cons(2, cons(3, null))));

console.log(len(lineList));
