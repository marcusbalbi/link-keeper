import { Response } from 'express';

function Cache(time = 31557600): any {
  return (target: any, key: any, descriptor: PropertyDescriptor): any => {
    const original = descriptor.value;
    descriptor.value = (req, res: Response, next) => {
      res.setHeader('Cache-Control', `public, max-age=${time}`);
      original(req, res, next);
    };
  };
}

export default Cache;
