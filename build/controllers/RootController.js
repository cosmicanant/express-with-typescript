"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../lib/logger");
const decorators_1 = require("./decorators");
const use_1 = require("./decorators/use");
const logRequest = (req, res, next) => {
    logger_1.Logger.instance.info('Request Received', req.url, req.method);
    next();
};
let LoginController = class LoginController {
    getRoot(req, res) {
        if (req.session && req.session.email) {
            res.send(`
      <div>
        <p>Welcome, ${req.session.email}</p>
        <a href='/auth/logout'>Logout</a>
        </div>
      `);
        }
        else {
            res.send(`
        <div> 
          <p>You need to login first</p>
          <a href='/auth/login'>LogIN</a>
        </div>
      `);
        }
    }
};
__decorate([
    decorators_1.get('/'),
    use_1.use(logRequest),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getRoot", null);
LoginController = __decorate([
    decorators_1.controller('')
], LoginController);
//# sourceMappingURL=RootController.js.map