import { inspect } from 'util';

import { MySQLDataContext, ConnectionOptions, Select } from 'formn';

import { Person } from '../entity/person.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // Only pull Person.id and Person.firstName.
    const query: Select<Person> = dataContext
      .from(Person, 'p')
      .select('p.id', 'p.firstName');

    console.log(query.toString());

    const people: Person[] = await query
      .execute();

    console.log(inspect(people, {depth: null, compact: false}));

    await dataContext.end();
  }
  catch(err) {
    console.error(err);
  }
}

main();

