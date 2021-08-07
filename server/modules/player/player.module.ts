import { EventListener } from '../../decorators/Events';
import { ServerModule } from '../../decorators/ServerModule';
import PlayerService from '../../services/player/player.service';

@ServerModule({ name: 'player' })
@EventListener()
export default class PlayerModule {
  private service: PlayerService;

  constructor(service: PlayerService) {
    this.service = service;

    console.log(this.service.core.database);
  }

  init(): Promise<boolean> {
    return new Promise((res) => {
      res(true);
    });
  }
}
