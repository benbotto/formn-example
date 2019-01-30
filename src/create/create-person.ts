import { inspect } from 'util';

import { MySQLDataContext, ConnectionOptions, Insert } from 'formn';

import { Person } from '../entity/person.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // Create a new Person instance.
    const president = new Person();

    president.firstName = 'Abe';
    president.lastName  = 'Lincoln';

    // Create an Insert query.
    const query: Insert<Person> = dataContext.insert(Person, president);

    // This is the SQL that will be executed on Query.execute();
    console.log(query.toString());

    // Persist the person.
    await query.execute();

    // The new person has the generated ID set.
    console.log(inspect(president, {depth: null, compact: false}));
  }
  catch(err) {
    console.error('Error creating user.');
    console.error(err);
  }
  finally {
    await dataContext.end();
  }
}

main();

