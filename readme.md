[![NPM Version](https://badge.fury.io/js/ts-pathof.svg?style=flat)](https://www.npmjs.com/package/ts-pathof)

# ts-pathof

Typesafe path to variable  
Implementation of https://github.com/Microsoft/TypeScript/issues/20423

## Install & Use

```
npm i ts-pathof
```

```ts
import { pathOf } from 'ts-pathof';

const c = { z: { y: { bb: 123 }}};
const path = pathOf(c, 'z', 'y', 'bb');

// path now is typeof [ 'z', 'y', 'bb' ]

const path2 = pathOf(c, 'z', 'y', 'gg'); // error, because no 'gg' field in c.z.y
```

## Type only assertion

Use pathOf`N` (where `N` is deep), to pick tuple-type path to field

Eg:

```ts
let path: pathOf3<typeof c, 'z', 'y', 'bb'>;
path = pathOf(c, 'z', 'y', 'bb');
```

### Limitations

Maximum 10 levels deep