"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pathOf(root, key1, key2, key3, key4, key5, key6, key7, key8, key9, key10) {
    return [key1, key2, key3, key4, key5, key6, key7, key8, key9, key10].filter(function (e) { return e !== undefined; });
}
exports.pathOf = pathOf;
//-------------------------
/*export type PathOf
<T extends { [x: string]: any; [x: number]: any },
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
<T extends { [x: string]: any; [x: number]: any },
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
}*/
