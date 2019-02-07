import { inspect } from 'util';

import { MySQLDataContext, ConnectionOptions, Select } from 'formn';

import { Person } from '../entity/person.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // Order by first name then last name.
    const query: Select<Person> = dataContext
      .from(Person, 'p')
      .select('p.id', 'p.firstName', 'p.lastName')
      .orderBy(
        {property: 'p.firstName', dir: 'DESC'},
        {property: 'p.lastName',  dir: 'ASC'});

    // Alternatively orderBy can take strings, in which case
    // the direction is ASC.  E.g.:
    // .orderBy('p.firstName', 'p.lastName');

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

