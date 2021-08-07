import { RedCore } from '../../core';
import PlayerModule from '../../modules/player/player.module';

export default class PlayerService {
  public core: RedCore;

  constructor(core: RedCore) {
    this.core = core;

    new PlayerModule(this);
  }
}
