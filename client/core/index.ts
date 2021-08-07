import { ClientModuleProps } from '@typings/modules';
import RedCoreBase from '../../common/boot';
import { ClientModuleToken } from './utils';

export class RedCore extends RedCoreBase {
  protected modules: Map<string, ClientModuleProps>;

  constructor() {
    super();

    RedCore.container.getMany(ClientModuleToken).forEach((module) => {
      this.logger.info(`[module:${module.name}]:register`);
      this.modules.set(`server:modules:${module.name}`, module);
    });
  }
}
