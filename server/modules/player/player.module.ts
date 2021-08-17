import PlayerService from '../../services/player/player.service';

interface ModuleProps {
  service: PlayerService;
  source: number;
  identifier: string;
}

export default class PlayerModule {
  private readonly service: PlayerService;
  public readonly source: number;
  public readonly identifier: string;
  public readonly username: string;

  constructor(module: ModuleProps) {
    console.log('fucking shit');

    this.service = module.service;
    this.source = module.source;
    this.identifier = module.identifier;
    this.username = GetPlayerName(source.toString());
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

  getName(): string {
    return this.username;
  }
}
