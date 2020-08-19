import { Response } from 'express';

const userPermissions = ['cadastrar', 'listar'];

function PermissionGuard(namespace: string): any {
  return (target: any, key: any, descriptor: PropertyDescriptor): any => {
    const original = descriptor.value;
    descriptor.value = (req, res: Response, next) => {
      if (userPermissions.includes(namespace)) {
        original(req, res, next);
      } else {
        res.status(403).json({ data: 'Sem Permissão' });
      }
    };
  };
}

export default PermissionGuard;
