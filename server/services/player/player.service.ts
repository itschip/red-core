import { RedCore } from '../../core';
import { Event, EventListener } from '../../decorators/Events';
import { ServerModule } from '../../decorators/ServerModule';
import { getGameLicense } from '../../lib/misc/getGameLicense';
import PlayerModule from '../../modules/player/player.module';

@ServerModule({ name: 'player' })
@EventListener()
export default class PlayerService {
  core: RedCore;

  constructor(core: RedCore) {
    this.core = core;
    console.log('hellloooo', this.core.database.isConnected);
  }

  @Event('playerJoining')
  private playerJoining() {
    const _source = global.source;
    const license = getGameLicense(_source);

    const player = new PlayerModule({
      service: this,
      source: _source,
      identifier: license,
    });

    console.log('new player is joining', player.getName());
  }
}
