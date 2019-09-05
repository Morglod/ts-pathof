type FixedArrayCap = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19;

type _POD_ = string|number|boolean|symbol|undefined|null|((...args: any) => any);

type Arr<T> = (
    (T[] & { length: FixedArrayCap }) |
    (readonly T[] & { length: FixedArrayCap })
);

export type PodJSON =
    _POD_|
    Arr<_POD_>|
    { [x in string]: PodJSON }|
    { [x in string]: Arr<PodJSON> };

export const AnyIndex = 0 as FixedArrayCap;