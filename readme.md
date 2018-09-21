[![NPM Version](https://badge.fury.io/js/ts-pathof.svg?style=flat)](https://www.npmjs.com/package/ts-pathof)

# ts-pathof

Typesafe path to variable  
Implementation of https://github.com/Microsoft/TypeScript/issues/20423

## Install & Use

```
npm i ts-pathof
```

#### Path as arguments

```ts
import { pathOf } from 'ts-pathof';

const c = { z: { y: { bb: 123 }}};
const path = pathOf(c, 'z', 'y', 'bb');
path -> [ 'z', 'y', 'bb' ]

const path2 = pathOf(c, 'z', 'y', 'gg'); // error, because no 'gg' field in c.z.y
```

For `pathOf` there is 10 level deep limitation.

#### Path as tuple

```ts
import { hasPath } from 'ts-pathof';

const c = { z: { y: { bb: 123 }}};
const path = hasPath(c, [ 'z', 'y', 'bb' ]);
path -> [ 'z', 'y', 'bb' ]

const path2 = hasPath(c, [ 'z', 'y', 'gg' ]); // no error
path2 -> value is false, type is never
```

## Path assertion

Use pathOf`N` (where `N` is deep), to pick tuple-type path to field

Eg:

```ts
let path: pathOf3<typeof c, 'z', 'y', 'bb'>;
path = pathOf(c, 'z', 'y', 'bb');
```

Use other type-only variant (without limitations on deep), `PathOf`:

```ts
const o = {x: { y: 10 }};

type xy = PathOf<typeof o, ['x', 'y']>;
xy -> ['x', 'y']

type xyz = PathOf<typeof o, ['x', 'y', 'z']>;
xyz -> never
```

## Pick type by path

```ts
const o = {x: { y: 10 }};

type xy = TypeByPath<typeof o, ['x', 'y']>;
xy -> number

type xyz = TypeByPath<typeof o, ['x', 'y', 'z']>;
xyz -> never
```

## PS

Check out [typedpark](https://github.com/kgtkr/typepark), [ts-tuple-hacks](https://github.com/Morglod/ts-tuple-hacks) and [Variadic Kinds thread](https://github.com/Microsoft/TypeScript/issues/5453) for more info on advenced tuple utils.  
Eg picking head or tail of tuple, reverse or join.

```ts
type composed = Compose<[boolean, string], [number]>;

composed -> [boolean, string, number]
```

Also checkout [tsargs](https://github.com/Morglod/tsargs), utility types for arguments.