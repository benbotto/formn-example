import { MySQLDataContext, ConnectionOptions } from 'formn';

async function main() {
  // Load ConnectionOptions from a JSON file.
  const connOpts: ConnectionOptions = require('../../connections.json');

  // Initialize a DataContext instance for MySQL.
  const dataContext = new MySQLDataContext();

  // Attempt to connect.  Log an error on failure, and end the connection on
  // completion.
  try {
    await dataContext.connect(connOpts);
    console.log('Connected!');
  }
  catch(err) {
    console.error('Failed to connect.');
    console.error(err);
  }
  finally {
    await dataContext.end();
  }
}

main();

