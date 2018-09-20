export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
>(
    root: T,
    key1: K1,
): [ K1 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
>(
    root: T,
    key1: K1,
    key2: K2,
): [ K1, K2 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
>(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
): [ K1, K2, K3 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
>(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
): [ K1, K2, K3, K4 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
>(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
): [ K1, K2, K3, K4, K5 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
>(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
): [ K1, K2, K3, K4, K5, K6 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
>(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
    key7: K7,
): [ K1, K2, K3, K4, K5, K6, K7 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
>(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
    key7: K7,
    key8: K8,
): [ K1, K2, K3, K4, K5, K6, K7, K8 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
>(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
    key7: K7,
    key8: K8,
    key9: K9,
): [ K1, K2, K3, K4, K5, K6, K7, K8, K9 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
    K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
>(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
    key7: K7,
    key8: K8,
    key9: K9,
    key10: K10,
): [ K1, K2, K3, K4, K5, K6, K7, K8, K9, K10 ];
export function pathOf
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
    K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
>(
    root: T,
    key1: K1,
    key2?: K2,
    key3?: K3,
    key4?: K4,
    key5?: K5,
    key6?: K6,
    key7?: K7,
    key8?: K8,
    key9?: K9,
    key10?: K10,
) {
    return [ key1, key2, key3, key4, key5, key6, key7, key8, key9, key10 ].filter(Boolean);
}

// ---------------------
export type pathOf1
<T extends { [x: string]: any },
    K1 extends keyof T,
> = [ K1 ];
export type pathOf2
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
> = [ K1, K2 ];
export type pathOf3
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
> = [ K1, K2, K3 ];
export type pathOf4
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
> = [ K1, K2, K3, K4 ];
export type pathOf5
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
> = [ K1, K2, K3, K4, K5 ];
export type pathOf6
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
> = [ K1, K2, K3, K4, K5, K6 ];
export type pathOf7
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
> = [ K1, K2, K3, K4, K5, K6, K7 ];
export type pathOf8
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
> = [ K1, K2, K3, K4, K5, K6, K7, K8 ];
export type pathOf9
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
> = [ K1, K2, K3, K4, K5, K6, K7, K8, K9 ];

export type pathOf10
<T extends { [x: string]: any },
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
    K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
> = [ K1, K2, K3, K4, K5, K6, K7, K8, K9, K10 ];