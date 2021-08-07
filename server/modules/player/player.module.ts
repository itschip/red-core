import { ServerModule } from '../../decorators/ServerModule';
import { Event, EventListener } from '../../decorators/Events';
import { getGameLicense } from '../../lib/misc/getGameLicense';
import { Logger } from 'winston';
import { mainLogger } from '../../../common/logger';
import PlayerService from '../../services/player.service';
import { playerRepo } from '../../database/repository/PlayerRepository';

@ServerModule({ name: 'player' })
@EventListener()
class PlayerModule {
  private logger: Logger = mainLogger.child({ module: 'player' });

  private playerService: PlayerService;

  init(): Promise<boolean> {
    return new Promise((res) => {
      res(true);
    });
  }

  @Event('playerJoining')
  async playerJoining() {
    const _source = (<any>global).source;
    const identifier = getGameLicense(_source);

    const username = GetPlayerName(_source);

    const player = playerRepo(this.playerService.core.database);
    await player.createPlayer(username, identifier);

    this.logger.info('New player loaded');
    this.logger.info(player);
  }
}
