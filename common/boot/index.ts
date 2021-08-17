import { mainLogger } from '../logger';
import { Logger } from 'winston';
import { Container } from 'typedi';
import { ServerModuleProps } from '@typings/modules';

export default abstract class RedCoreBase {
  protected logger: Logger = mainLogger.child({
    module: 'core',
  });

  protected modules: Map<string, ServerModuleProps>;
  static container = Container;

  protected constructor() {
    this.logger.info('Booting up');
    this.modules = new Map<string, ServerModuleProps>();
  }

  bootstrap() {
    this.logger.info('Bootstrapping REDCORE');

    this.modules.forEach((module) => {
      this.logger.info(`module:${module.name} Initialized`);
    });
  }
}
