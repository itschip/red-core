import { ConnectionManager } from 'typeorm';
import { mainLogger } from '../../common/logger';
import { Players } from './models/Player';

const dbLogger = mainLogger.child({ module: 'database' });

const connection = new ConnectionManager();

connection
  .create({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'redserver',
    entities: [Players],
    synchronize: true,
  })
  .connect()
  .then(() => {
    dbLogger.info('Database connection established');
  })
  .catch((e) => {
    dbLogger.error(`Failed to connect to database. Error: ${e.message}`);
  });

export default connection;
