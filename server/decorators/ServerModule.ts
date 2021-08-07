import { ServiceMetadata } from "typedi";
import { ServerModuleToken } from "../core/utils";
import { RedCore } from "../core";

export function ServerModule<T, K extends keyof T>(module: { name: string }) {
  return function (target: Function) {
    target.prototype.name = module.name

    const service: ServiceMetadata<T, K> = {
      type: target,
      multiple: true,
      id: ServerModuleToken,
      global: false
    }

    RedCore.container.set(service);
  };
}
