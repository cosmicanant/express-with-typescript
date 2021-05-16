"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const AppEnums_1 = require("../../enums/AppEnums");
function controller(routePrefix) {
    return function (target) {
        const props = Object.getOwnPropertyNames(target.prototype);
        props.forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(AppEnums_1.MetadataKeys.path, target.prototype, key);
            const method = Reflect.getMetadata(AppEnums_1.MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(AppEnums_1.MetadataKeys.middlewares, target.prototype, key) || [];
            if (path) {
                AppRouter_1.AppRouter.instance[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
            }
        });
    };
}
exports.controller = controller;
//# sourceMappingURL=controller.js.map