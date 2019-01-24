import { ConnectionsFileReader, ConnectionOptions } from 'formn';

// Read connection details.  DB_HOST and DB_PASS should be defined
// as env vars, otherwise an exception will be raised.
const connOpts: ConnectionOptions = new ConnectionsFileReader()
  .readConnectionOptions('connections.env.json')[0];

console.log(connOpts);
