import { Logger } from 'winston';
import { mainLogger } from '../../common/logger';
import { RedCore } from '../core';

export default class PlayerService {
  readonly logger: Logger = mainLogger.child({
    module: 'player-service',
  });

  public core: RedCore;

  constructor(core: RedCore) {
    this.logger.info('Started player service');
    this.core = core;
  }
}
