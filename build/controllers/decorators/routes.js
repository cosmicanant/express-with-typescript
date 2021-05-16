"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.put = exports.del = exports.post = exports.get = void 0;
require("reflect-metadata");
const AppEnums_1 = require("../../enums/AppEnums");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('method', method, target, key);
            Reflect.defineMetadata('path', path, target, key);
        };
    };
}
exports.get = routeBinder(AppEnums_1.Methods.get);
exports.post = routeBinder(AppEnums_1.Methods.post);
exports.del = routeBinder(AppEnums_1.Methods.del);
exports.put = routeBinder(AppEnums_1.Methods.put);
exports.patch = routeBinder(AppEnums_1.Methods.patch);
//# sourceMappingURL=routes.js.map