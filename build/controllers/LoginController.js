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
    getLogin(req, res) {
        if (req.session && req.session.email) {
            res.redirect('/');
        }
        res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
        <label>Password</label>
        <input name="password" type="password"/>
      <div>
      </div>
      <input type="submit" value="submit">Submit</button>
    </form>
  `);
    }
    postLogin(req, res) {
        if (req.body.email === '123@123.com' && req.body.password === '123') {
            req.session = {
                email: '123@123.com',
                name: '123',
                loginDate: Date.now()
            };
            res.redirect('/');
        }
        else {
            res.status(400);
        }
    }
    logout(req, res) {
        req.session = null;
        res.send(`
      <div>
        <p> You are successfully logout</p>
        <a href='/'>HOME</a>
        <a href='/auth/login'>Login Again</a>
      </div>
    `);
    }
};
__decorate([
    decorators_1.get('/login'),
    use_1.use(logRequest),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getLogin", null);
__decorate([
    decorators_1.post('/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "postLogin", null);
__decorate([
    decorators_1.get('/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "logout", null);
LoginController = __decorate([
    decorators_1.controller('/auth')
], LoginController);
//# sourceMappingURL=LoginController.js.map