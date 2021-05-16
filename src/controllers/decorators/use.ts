import { RequestHandler } from "express";
import { MetadataKeys } from '../../enums/AppEnums'

export function use(middleWare: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const handlers = Reflect.getMetadata(MetadataKeys.middlewares, target, key) || [];
    handlers.push(middleWare);
    Reflect.defineMetadata(MetadataKeys.middlewares, handlers, target, key);
  }
}