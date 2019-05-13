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

//-------------------------

export type PathOf
<T extends { [x: string]: any },
    Path extends [ K1?, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?, K10?, K11?, K12?, K13?, K14?, K15?, K16?, K17?, K18?, K19?, K20? ],
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
    K11 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10],
    K12 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11],
    K13 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12],
    K14 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13],
    K15 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14],
    K16 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15],
    K17 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16],
    K18 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17],
    K19 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17][K18],
    K20 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17][K18][K19],
> = Path;

export function hasPath
<T extends { [x: string]: any },
    Path extends [ K1?, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?, K10?, K11?, K12?, K13?, K14?, K15?, K16?, K17?, K18?, K19?, K20? ],
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
    K11 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10],
    K12 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11],
    K13 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12],
    K14 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13],
    K15 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14],
    K16 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15],
    K17 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16],
    K18 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17],
    K19 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17][K18],
    K20 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17][K18][K19],
>(
    root: T,
    path: Path,
    check: true|'no-check' = true,
): Path| false {
    if (check) {
        loop: for (const step of path) {
            if (step === undefined) break loop;
            if (!(step in root)) return false as any;
            root = root[step as any];
        }
    }
    return path;
}

type _IfExt<A, B, True, False> = A extends B ? True : False;
type _Obj = { [x: string]: any };
type _IfObj<A, True, False> = _IfExt<A, _Obj, True, False>;
type _IsObj<A, True> = _IfExt<A, _Obj, True, never>;

export type Path5<
    T extends { [x: string]: any },
    K1 extends _IsObj<T, keyof T> = any, // _IsObj<T, keyof T>,
    K2 extends _IsObj<T[K1], keyof T[K1]> = any, // _IsObj<T[K1], keyof T[K1]>,
    K3 extends _IsObj<T[K1][K2], keyof T[K1][K2]> = any, // _IsObj<T[K1][K2], keyof T[K1][K2]>,
    K4 extends _IsObj<T[K1][K2][K3], keyof T[K1][K2][K3]> = any, // _IsObj<T[K1][K2][K3], keyof T[K1][K2][K3]>,
    K5 extends _IsObj<T[K1][K2][K3][K4], keyof T[K1][K2][K3][K4]> = any, // _IsObj<T[K1][K2][K3][K4], keyof T[K1][K2][K3][K4]>,
> =
T[K1][K2][K3][K4][K5] extends never ?
T[K1][K2][K3][K4] extends never ?
T[K1][K2][K3] extends never ?
T[K1][K2] extends never ?
T[K1] extends never ? ([]) : 
[ K1 ] : [ K1, K2 ] : [K1,K2,K3] : [K1,K2,K3,K4] : [K1,K2,K3,K4,K5];

export type Path<T> = [
    T extends never ? never : keyof T,
    T extends never ? never : keyof T,
    T extends never ? never : keyof T,
    T extends never ? never : keyof T,
    T extends never ? never : keyof T,
];

// [ K1?, K2?, K3?, K4?, K5? ];

// export type Path<
//     T extends { [x: string]: any },
//     K1 = keyof T,
//     K2 = keyof T[keyof T],
//     K3 = keyof T[keyof T][keyof T[keyof T]],
//     K4 = keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]],
//     K5 = keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]],
//     K6 = keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]],
//     K7 = keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]],
//     K8 = keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]]],
//     K9 = keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]]]],
//     K10 = keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]][keyof T[keyof T][keyof T[keyof T]][keyof T[keyof T][keyof T[keyof T]]]]]]]]],
// > = [ K1?, K2?, K3?, K4?, K5? , K6?, K7?, K8?, K9?, K10? ];

export type TypeByPath<
    T extends { [x: string]: any },
    Path_ extends Path<T>,
> = Path_ extends [ string, string, string, string, string, string, string, string, string, string ] ? T[Path_[0]][Path_[1]][Path_[2]][Path_[3]][Path_[4]][Path_[5]][Path_[6]][Path_[7]][Path_[8]][Path_[9]] :
    Path_ extends [ string, string, string, string, string, string, string, string, string ] ? T[Path_[0]][Path_[1]][Path_[2]][Path_[3]][Path_[4]][Path_[5]][Path_[6]][Path_[7]][Path_[8]] :
    Path_ extends [ string, string, string, string, string, string, string, string ] ? T[Path_[0]][Path_[1]][Path_[2]][Path_[3]][Path_[4]][Path_[5]][Path_[6]][Path_[7]] :
    Path_ extends [ string, string, string, string, string, string, string ] ? T[Path_[0]][Path_[1]][Path_[2]][Path_[3]][Path_[4]][Path_[5]][Path_[6]] :
    Path_ extends [ string, string, string, string, string, string ] ? T[Path_[0]][Path_[1]][Path_[2]][Path_[3]][Path_[4]][Path_[5]] :
    Path_ extends [ string, string, string, string, string ] ? T[Path_[0]][Path_[1]][Path_[2]][Path_[3]][Path_[4]] :
    Path_ extends [ string, string, string, string ] ? T[Path_[0]][Path_[1]][Path_[2]][Path_[3]] :
    Path_ extends [ string, string, string ] ? T[Path_[0]][Path_[1]][Path_[2]] :
    Path_ extends [ string, string ] ? T[Path_[0]][Path_[1]] :
    Path_ extends [ string ] ? T[Path_[0]] : never;


interface NextInt {
    0: 1
    1: 2
    2: 3
    3: 4
    4: 5
    [rest: number]: number
}

// prettier-ignore
export type PathType<Obj, Path extends Array<string | number>, Index extends number = 0> = {
    // Need to use this object indexing pattern to avoid circular reference error.
    [Key in Index]: Path[Key] extends undefined
        // Return Obj when we reach the end of the Path.
        ? Obj
        // Check if the Key is in the Obj.
        : Path[Key] extends keyof Obj
            // If the Value does not contain null.
            // `T & {}` is a trick to remove undefined from a union type.
            ? Obj[Path[Key]] extends Obj[Path[Key]] & {}
                ? PathType<
                        Obj[Path[Key]],
                        Path,
                        Extract<NextInt[Key], number>
                    >
                // Remove the undefined from the Value, and add it to the union after.
                : undefined | PathType<
                        Obj[Path[Key]] & {},
                        Path,
                        Extract<NextInt[Key], number>
                    >
            : never
}[Index];

function get<O, P extends PathOf<O>>(o: O, p: P): PathType<O, P> {
    
}