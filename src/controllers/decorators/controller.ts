import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods, MetadataKeys } from '../../enums/AppEnums';


export function controller(routePrefix: string) {
  return function (target: Function) {
    const props = Object.getOwnPropertyNames(target.prototype)
    props.forEach((key) => {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.middlewares, target.prototype, key) || [];
      if(path) {
          AppRouter.instance[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    });
  }
}