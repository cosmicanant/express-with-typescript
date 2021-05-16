import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import { Logger } from '../lib/logger';
import { get, controller, post } from './decorators';
import { use } from './decorators/use';


const logRequest: RequestHandler = (req, res, next) => {
  Logger.instance.info('Request Received', req.url, req.method);
  next();
}

@controller('/auth')
class LoginController {

  @get('/login')
  @use(logRequest)
  getLogin(req: Request, res: Response): void {
    if(req.session && req.session.email) {
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
  `)
  }

  @post('/login')
  postLogin(req: Request, res: Response): void {
    if(req.body.email === 'test@test.com' && req.body.password === '123') {
      req.session = {
        email: '123@123.com',
        name: '123',
        loginDate: Date.now()
      }
      res.redirect('/');
    } else {
      res.status(400);
    }
  }

  @get('/logout')
  logout(req: Request, res: Response): void {
    req.session = null;
    res.send(`
      <div>
        <p> You are successfully logout</p>
        <a href='/'>HOME</a>
        <a href='/auth/login'>Login Again</a>
      </div>
    `)
  }
}

