import { Event, EventListener } from '../../decorators/Events';
import { ServerModule } from '../../decorators/ServerModule';
import { getGameLicense } from '../../lib/misc/getGameLicense';
import PlayerService from '../../services/player/player.service';

interface ModuleProps {
  service: PlayerService;
  source: number;
  identifier: string;
}

@ServerModule({ name: 'player' })
@EventListener()
export default class PlayerModule {
  private readonly service: PlayerService;
  public readonly source: number;
  public readonly identifier: string;

  constructor({ service, source, identifier }: ModuleProps) {
    this.service = service;
    this.source = source;
    this.identifier = identifier;
  }

  init(): Promise<boolean> {
    return new Promise((res) => {
      res(true);
    });
  }

  getSource(): number {
    return this.source;
  }

  getIdentifier(): string {
    return this.identifier;
  }

  kickPlayer(reason: string): void {
    DropPlayer(this.source.toString(), reason);
  }
}
