import { ServiceMetadata } from 'typedi';
import { ClientModuleToken } from '../core/utils';
import { RedCore } from '../core';

export function ClientModule<T, K extends keyof T>(module: { name: string }) {
  return function (target: Function) {
    target.prototype.name = module.name;

    const service: ServiceMetadata<T, K> = {
      type: target,
      multiple: true,
      id: ClientModuleToken,
      global: false,
    };

    RedCore.container.set(service);
  };
}
