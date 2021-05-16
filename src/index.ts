import express, { Request, Response, RequestHandler } from 'express';
import { Logger } from './lib/logger';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import { router } from './loginRoutes';

const logger = Logger.instance;

const port = 2000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cookieSession({keys: ['mysecret']}));
app.use(AppRouter.instance);
app.use(router);
app.listen(port, () => {
  logger.info('server started', { port });
})