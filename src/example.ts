import { pathOf } from ".";

const a = { x: 10 };
const b = { x: a };
const c = { z: { y: { bb: 123 }}};

const r1 = pathOf(a, 'x');
const r2 = pathOf(b, 'x');
const r3 = pathOf(c, 'z', 'y', 'bb');
