// Start coding
import './database/connection';
import './modules/player/player.module';
import './modules/stable/stable.module';

import { RedCore } from './core';

new RedCore().bootstrap();
