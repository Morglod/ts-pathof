import { pathOf, pathOf3 } from ".";

const a = { x: 10 };
const b = { x: a };
const c = { z: { y: { bb: 123 }}};
const d = {x: [{b: 123}]};

const r1 = pathOf(a, 'x');
const r2 = pathOf(b, 'x');
const r3: pathOf3<typeof c, 'z', 'y', 'bb'> = pathOf(c, 'z', 'y', 'bb');
const r4 = pathOf(d, 'x', 0, 'b');
