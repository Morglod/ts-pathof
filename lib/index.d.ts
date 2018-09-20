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
