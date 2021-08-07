import { Connection, Repository } from 'typeorm';
import { Player } from '../models/Player';

export default class PlayerRepository extends Repository<Player> {
  async createPlayer(username: string, identifier: string) {
    const player = new Player();
    player.identifier = identifier;
    player.name = username;
    await this.save(player);
  }
}

export const playerRepo = (database: Connection) =>
  database.getCustomRepository(PlayerRepository);
