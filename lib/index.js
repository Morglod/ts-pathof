"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pathOf(root, key1, key2, key3, key4, key5, key6, key7, key8, key9, key10) {
    return [key1, key2, key3, key4, key5, key6, key7, key8, key9, key10].filter(Boolean);
}
exports.pathOf = pathOf;
function hasPath(root, path, check) {
    if (check === void 0) { check = true; }
    if (check) {
        loop: for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var step = path_1[_i];
            if (step === undefined)
                break loop;
            if (!(step in root))
                return false;
            root = root[step];
        }
    }
    return path;
}
exports.hasPath = hasPath;
