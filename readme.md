[![NPM Version](https://badge.fury.io/js/ts-pathof.svg?style=flat)](https://www.npmjs.com/package/ts-pathof)

# ts-pathof

Typesafe path to variable  
Implementation of https://github.com/Microsoft/TypeScript/issues/20423

There is limitations for 2 level deep with type hacks, so no infinit tuples

## Install & Use

```
npm i ts-pathof --save-exact
```

```ts
import { pathOf } from 'ts-pathof';

const c = { z: { y: { bb: 123 }}};
const path = pathOf(c, 'z', 'y', 'bb');

// path now is typeof [ 'z', 'y', 'bb' ]
const path2 = pathOf(c, 'z', 'y', 'gg'); // error, because no 'gg' field in c.z.y
```

Maximum 10 levels deep limitation on `pathOf`

#### Path as tuple

```ts
import { hasPath } from 'ts-pathof';

const c = { z: { y: { bb: 123 }}};
const path = hasPath(c, [ 'z', 'y', 'bb' ]); // ok
const path2 = hasPath(c, [ 'z', 'y', 'gg' ]); // false & compilation error
```

Maximum 20 levels deep limitation on `hasPath`

## Type only assertion

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