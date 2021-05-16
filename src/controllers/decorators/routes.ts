import { RequestHandler } from 'express';
import 'reflect-metadata';
import { Methods } from '../../enums/AppEnums';

interface RouteHandler extends PropertyDescriptor {
  value? : RequestHandler
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandler) {
      Reflect.defineMetadata('method', method, target, key);
      Reflect.defineMetadata('path', path, target, key);
    }
  }
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const put = routeBinder(Methods.put);
export const patch = routeBinder(Methods.patch);