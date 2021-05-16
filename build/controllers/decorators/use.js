"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
const AppEnums_1 = require("../../enums/AppEnums");
function use(middleWare) {
    return function (target, key, desc) {
        const handlers = Reflect.getMetadata(AppEnums_1.MetadataKeys.middlewares, target, key) || [];
        handlers.push(middleWare);
        Reflect.defineMetadata(AppEnums_1.MetadataKeys.middlewares, handlers, target, key);
    };
}
exports.use = use;
//# sourceMappingURL=use.js.map