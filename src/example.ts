import { pathOf, pathOf3, PathOf, Path, TypeByPath } from ".";

const a = { x: 10 };
const b = { x: a };
const c = { z: { y: { bb: 123 }}};

const r1 = pathOf(a, 'x');
const r2 = pathOf(b, 'x');
const r3: pathOf3<typeof c, 'z', 'y', 'bb'> = pathOf(c, 'z', 'y', 'bb');

function getFromC<P extends Path<typeof c>>(obj: typeof c, p: P): TypeByPath<typeof c, P> {
    for (let i = 0; i < p.length; ++i) {
        if (p[i] in obj) obj = obj[p[i] as any];
        else throw new Error('bad obj value');
    }
    return obj as any;
}

function getFromObject<
    Obj extends { [x: string]: any },
    P extends Path<Obj>
>(obj: Obj, p: P): TypeByPath<Obj, P> {
    for (let i = 0; i < p.length; ++i) {
        if (p[i] in obj) obj = obj[p[i] as any];
        else throw new Error('bad obj value');
    }
    return obj as any;
}

// Ok
const c_z: { y: { bb: number } } = getFromC(c, [ 'z' ]);

// Error, return type check 1
// const c_z_err1: { y: { bb: string } } = getFromC(c, [ 'z' ]);

// Error, return type check 2
// const c_z_err2: { y: { bb: number } } = getFromC(c, [ 'z', 'y' ]);

const c_z_y: { bb: number } = getFromObject(c, [ 'z', 'y' ]);

type PathInC = Path<typeof c>;
function lookUpC(path: PathInC) {
    // smth
    console.log(path);
}

// Error, there is no c.z.y.z
// lookUpC([ 'z', 'y', 'z' ])

const c2 = { z: { y: { bb: 123 }}, af: 'hello', ab: 'world' };

type PathInC_limited = Path<typeof c, 'z'|'ab'>;
function lookUpC2(path: PathInC_limited) {
    // smth
    console.log(path);
}

// Error, because path is limited to 'z' or 'ab'
// lookUpC2([ 'af' ])

function updateObject<
    Obj extends { [x: string]: any },
    P extends Path<Obj>,
    NewValue extends TypeByPath<Obj, P>
>(obj: Obj, p: P, newValue: NewValue): Obj {
    const _ref = obj;
    for (let i = 0; i < p.length - 1; ++i) {
        if (p[i] in obj) obj = obj[p[i] as any];
        else throw new Error('bad obj value');
    }
    (obj as any)[p[p.length - 1]] = newValue;
    return _ref;
}

updateObject(c, [ 'z', 'y', 'bb' ], 10);