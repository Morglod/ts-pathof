export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T>(root: T, key1: K1): [K1];
export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1]>(root: T, key1: K1, key2: K2): [K1, K2];
export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(root: T, key1: K1, key2: K2, key3: K3): [K1, K2, K3];
export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(root: T, key1: K1, key2: K2, key3: K3, key4: K4): [K1, K2, K3, K4];
export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4]>(root: T, key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): [K1, K2, K3, K4, K5];
export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5]>(root: T, key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): [K1, K2, K3, K4, K5, K6];
export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6]>(root: T, key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7): [K1, K2, K3, K4, K5, K6, K7];
export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6], K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7]>(root: T, key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7, key8: K8): [K1, K2, K3, K4, K5, K6, K7, K8];
export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6], K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7], K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8]>(root: T, key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7, key8: K8, key9: K9): [K1, K2, K3, K4, K5, K6, K7, K8, K9];
export declare function pathOf<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6], K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7], K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8], K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9]>(root: T, key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7, key8: K8, key9: K9, key10: K10): [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10];
export declare type pathOf1<T extends {
    [x: string]: any;
}, K1 extends keyof T> = [K1];
export declare type pathOf2<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1]> = [K1, K2];
export declare type pathOf3<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]> = [K1, K2, K3];
export declare type pathOf4<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]> = [K1, K2, K3, K4];
export declare type pathOf5<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4]> = [K1, K2, K3, K4, K5];
export declare type pathOf6<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5]> = [K1, K2, K3, K4, K5, K6];
export declare type pathOf7<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6]> = [K1, K2, K3, K4, K5, K6, K7];
export declare type pathOf8<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6], K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7]> = [K1, K2, K3, K4, K5, K6, K7, K8];
export declare type pathOf9<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6], K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7], K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8]> = [K1, K2, K3, K4, K5, K6, K7, K8, K9];
export declare type pathOf10<T extends {
    [x: string]: any;
}, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6], K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7], K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8], K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9]> = [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10];
declare type Head<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
declare type Tail<T extends any[]> = ((...args: T) => void) extends (head: any, ...tail: infer U) => any ? U : never;
export declare type TypeByPath<T extends {
    [x: string]: any;
}, Path extends string[], Phead = Head<Path>, Ptail = Tail<Path>> = {
    0: never;
    1: Phead extends keyof T ? TypeByPath<T[Phead], Tail<Path>> : never;
    2: Phead extends keyof T ? T[Phead] : never;
}[Ptail extends [any] ? 1 : 2];
export declare type PathOf<T extends {
    [x: string]: any;
}, Path extends string[], FullPath extends string[] = Path, Phead = Head<Path>, Ptail = Tail<Path>> = {
    0: never;
    1: Phead extends keyof T ? PathOf<T[Phead], Tail<Path>, FullPath> : never;
    2: Phead extends keyof T ? FullPath : never;
}[Ptail extends [any] ? 1 : 2];
export declare function hasPath<T extends {
    [x: string]: any;
}, Path extends string[]>(target: T, path: Path, check?: true | 'no-check'): PathOf<T, Path> | false;
export {};
