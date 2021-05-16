"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const pino_1 = __importDefault(require("pino"));
class Logger {
    static get instance() {
        if (Logger._logger == null) {
            Logger._logger = pino_1.default({ formatters: {
                    level(label) {
                        return { level: label };
                    }
                }
            });
        }
        return Logger._logger;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map