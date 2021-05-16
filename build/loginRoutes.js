"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = exports.router = void 0;
const express_1 = require("express");
const logger_1 = require("./lib/logger");
const router = express_1.Router();
exports.router = router;
const logger = logger_1.Logger.instance;
router.get('/login', (req, res) => {
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
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'anant.shukla@monotype.com' && password === '123') {
        req.session = { login: true, name: 'Anant' };
    }
    res.redirect('/');
});
router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/');
});
router.get('/', (req, res) => {
    if (req.session && req.session.login) {
        res.send(`
      <div>
        <div>Welcome ${req.session.name}, you are logged IN</div>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>you are not logged IN</div>
        <a href="/login">Log IN</a>
      </div>
    `);
    }
});
const requireAuth = (req, res, next) => {
    if (req.session && req.session.login) {
        return next();
    }
    res.status(403).json({ 'msg': 'Unauthorized access' });
};
exports.requireAuth = requireAuth;
router.get('/protected', requireAuth, (req, res) => {
    res.send({ 'status': 'success' });
});
//# sourceMappingURL=loginRoutes.js.map