"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    getLogin(req, res) {
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
}
