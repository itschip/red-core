import { Event, EventListener } from '../../decorators/Events';
import { ServerModule } from '../../decorators/ServerModule';
import { getGameLicense } from '../../lib/misc/getGameLicense';
import PlayerService from '../../services/player/player.service';

@ServerModule({ name: 'player' })
@EventListener()
export default class PlayerModule {
  private service: PlayerService;

  constructor(service: PlayerService) {
    this.service = service;
  }

  init(): Promise<boolean> {
    return new Promise((res) => {
      res(true);
    });
  }

  @Event('playerJoining')
  playerJoining() {
    const _source = global.source;

    const identifier = getGameLicense(_source);
    const username = GetPlayerName(_source.toString());
  }
}
