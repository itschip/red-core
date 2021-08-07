import { Connection, Repository } from 'typeorm';
import { Players } from '../models/Player';

export default class PlayerRepository extends Repository<Players> {
  async createPlayer(username: string, identifier: string) {
    const player = new Players();
    player.identifier = identifier;
    player.name = username;
    await this.save(player);
  }
}

export const playerRepo = (database: Connection) =>
  database.getCustomRepository(PlayerRepository);
