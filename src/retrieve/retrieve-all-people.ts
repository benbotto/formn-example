import { inspect } from 'util';

import { MySQLDataContext, ConnectionOptions, Select } from 'formn';

import { Person } from '../entity/person.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // Create a Select query, which will pull all People records from the
    // people table.
    const query: Select<Person> = dataContext
      .from(Person)
      .select();

    // Log the generated SQL.
    console.log(query.toString());

    // Execute the query to get all Person records.
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

