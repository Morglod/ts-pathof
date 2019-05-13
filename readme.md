[![NPM Version](https://badge.fury.io/js/ts-pathof.svg?style=flat)](https://www.npmjs.com/package/ts-pathof)

# ts-pathof

Typesafe paths in objects.  
Implementation of https://github.com/Microsoft/TypeScript/issues/20423

There is sometimes limitations for 2 level deep with type hacks, so no infinit tuples

## Install & Use

```
npm i ts-pathof --save-exact
```

```ts
const c = { z: { y: { bb: 123 }}};

const bb = getFromObject(c, [ 'z', 'y', 'bb' ]);
```

`getFromObject` implementation:
```ts
import { Path, TypeByPath } from 'ts-pathof';

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
```

## Path<Obj> type

Type used to handle object's paths.  

!! Path's deep is limited to 10 for better types performance !!

```ts
type Path<Obj, K1?, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?, K10?> = [ keys ];
```

You can define your Path type:
```ts
type PathInC = Path<typeof c>;
function doSmth(path: PathInC);
```

Path could be limited:
```ts
const c2 = {
    z: { y: { bb: 123 }},
    af: 'hello',
    ab: 'world'
};

// Limit 1st key to 'z' or 'ab'.
type PathInC_limited = Path<typeof c, 'z'|'ab'>;

function doSmth(path: PathInC_limited);

// Error, because first key of path is limited to 'z' or 'ab'
lookUpC2([ 'af' ])
```

## TypeByPath<Obj, P>

Type used to resolve type by given path in object.

```ts
type TypeByPath<Obj, Path_ extends Path<T>> = typeByPath | never;
```

Can be used eg for `updateObject(obj, path, newValue)` implementation:
```ts
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
```

## Use path with runtime assertion

```ts
import { pathOf } from 'ts-pathof';

const c = { z: { y: { bb: 123 }}};
const path = pathOf(c, 'z', 'y', 'bb');

// path now is typeof [ 'z', 'y', 'bb' ]
const path2 = pathOf(c, 'z', 'y', 'gg'); // error, because no 'gg' field in c.z.y
```

Maximum 10 levels deep limitation on `pathOf`

### Use path with runtime assertion: with tuple

```ts
import { hasPath } from 'ts-pathof';

const c = { z: { y: { bb: 123 }}};
const path = hasPath(c, [ 'z', 'y', 'bb' ]); // ok
const path2 = hasPath(c, [ 'z', 'y', 'gg' ]); // false & compilation error
```

Maximum 20 levels deep limitation on `hasPath`

## Statically assert if type has path

Use pathOf`N` (where `N` is deep), to pick tuple-type path to field  
Maximum 10 levels deep

Eg:

```ts
let path: pathOf3<typeof c, 'z', 'y', 'bb'>;
path = pathOf(c, 'z', 'y', 'bb');
```

Use other type-only variant (with 20 levels limitation on deep), `PathOf`:

```ts
const o = {x: { y: 10 }};

type xy = PathOf<typeof o, ['x', 'y']>; // ok

type xyz = PathOf<typeof o, ['x', 'y', 'z']>; // error
```

## PS

Check out [typedpark](https://github.com/kgtkr/typepark), and [Variadic Kinds thread](https://github.com/Microsoft/TypeScript/issues/5453) for more info on advenced tuple utils.  
Eg picking head or tail of tuple, reverse or join.

```ts
type composed = Compose<[boolean, string], [number]>;

composed -> [boolean, string, number]
```

Also checkout [tsargs](https://github.com/Morglod/tsargs), utility types for arguments.