import { RedCore } from '../../core';
import { Event, EventListener } from '../../decorators/Events';
import { getGameLicense } from '../../lib/misc/getGameLicense';
import PlayerModule from '../../modules/player/player.module';

@EventListener()
export default class PlayerService {
  core: RedCore;

  constructor(core: RedCore) {
    this.core = core;
  }

  @Event('playerJoining')
  playerJoining() {
    const _source = global.source;
    const license = getGameLicense(_source);

    const player = new PlayerModule({
      service: this,
      source: _source,
      identifier: license,
    });
  }
}
