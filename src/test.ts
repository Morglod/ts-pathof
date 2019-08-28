import { pathOf, pathOf3 } from ".";

declare var console: any;

const a = { x: 10 };
const r1 = pathOf(a, 'x');
console.assert(r1.join() === ['x'].join(), 'a');

const b = { x: a };
const r2 = pathOf(b, 'x');
console.assert(r2.join() === ['x'].join(), 'b');

const c = { z: { y: { bb: 123 }}};
const r3: pathOf3<typeof c, 'z', 'y', 'bb'> = pathOf(c, 'z', 'y', 'bb');
console.assert(r3.join() === ['z', 'y', 'bb'].join(), 'c');

const d = {x: [{b: 123}]};
const r4 = pathOf(d, 'x', 1, 'b');
console.assert(r4.join() === ['x', 1, 'b'].join(), 'd');

const e = {x: [{b: 123}]};
const r5 = pathOf(d, 'x', 0, 'b');
console.assert(r5.join() === ['x', 0, 'b'].join(), 'e');
