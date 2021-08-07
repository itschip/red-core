import { EventListener } from '../../decorators/Events';
import { ServerModule } from '../../decorators/ServerModule';

@ServerModule({ name: 'stable' })
@EventListener()
class StableModule {
  init(): Promise<boolean> {
    return new Promise((res) => {
      res(true);
    });
  }
}
