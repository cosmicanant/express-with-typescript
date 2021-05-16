"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./lib/logger");
const cookie_session_1 = __importDefault(require("cookie-session"));
const AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
const loginRoutes_1 = require("./loginRoutes");
const logger = logger_1.Logger.instance;
const port = 2000;
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['mysecret'] }));
app.use(AppRouter_1.AppRouter.instance);
app.use(loginRoutes_1.router);
app.listen(port, () => {
    logger.info('server started', { port });
});
//# sourceMappingURL=index.js.map