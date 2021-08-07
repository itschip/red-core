import { ServerModuleProps } from '@typings/modules';
import RedCoreBase from '../../common/boot';
import { ServerModuleToken } from './utils';
import Connection from '../database/connection';

export class RedCore extends RedCoreBase {
  protected modules: Map<string, ServerModuleProps>;

  public database = Connection.get();

  constructor() {
    super();

    RedCore.container.getMany(ServerModuleToken).forEach((module) => {
      this.logger.info(`[module:${module.name}]:register`);
      this.modules.set(`server:modules:${module.name}`, module);
    });
  }
}
