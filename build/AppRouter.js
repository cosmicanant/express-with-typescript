"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = __importDefault(require("express"));
class AppRouter {
    static get instance() {
        if (!AppRouter._instance) {
            AppRouter._instance = express_1.default.Router();
        }
        return AppRouter._instance;
    }
}
exports.AppRouter = AppRouter;
//# sourceMappingURL=AppRouter.js.map