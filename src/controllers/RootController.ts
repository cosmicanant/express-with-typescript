import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import { Logger } from '../lib/logger';
import { get, controller, post } from './decorators';
import { use } from './decorators/use';


const logRequest: RequestHandler = (req, res, next) => {
  Logger.instance.info('Request Received', req.url, req.method);
  next();
}

@controller('')
class LoginController {
  @get('/')
  @use(logRequest)
  getRoot(req: Request, res: Response): void {
    if(req.session && req.session.email) {
      res.send(`
      <div>
        <p>Welcome, ${req.session.email}</p>
        <a href='/auth/logout'>Logout</a>
        </div>
      `)
    } else {
      res.send(`
        <div> 
          <p>You need to login first</p>
          <a href='/auth/login'>LogIN</a>
        </div>
      `)
    }
  }
}

