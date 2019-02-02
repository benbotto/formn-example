import { MySQLDataContext, ConnectionOptions, Select } from 'formn';

import { Person } from '../entity/person.entity';

const connOpts: ConnectionOptions = require('../../connections.json');

async function main() {
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    const query: Select<Person> = dataContext
      .from(Person)
      .select();

    console.log(query.toString());

    const people: Person[] = await query
      .execute();

    console.log(JSON.stringify(people, null, 2));

    await dataContext.end();
  }
  catch(err) {
    console.error(err);
  }
}

main();

