import { ServerModuleProps } from '@typings/modules';
import RedCoreBase from '../../common/boot';
import { ServerModuleToken } from './utils';
import Connection from '../database/connection';
import PlayerService from '../services/player/player.service';

export class RedCore extends RedCoreBase {
  protected modules: Map<string, ServerModuleProps>;

  public database = Connection.get();

  public playerService: PlayerService;

  constructor() {
    super();

    /* this.playerService = new PlayerService(this); */

    RedCore.container.getMany(ServerModuleToken).forEach((module) => {
      this.logger.info(`[module:${module.name}]:register`);
      this.modules.set(`server:modules:${module.name}`, module);
    });
  }
}
