import { inspect } from 'util';

import { MySQLDataContext, ConnectionOptions, Select, ConditionBuilder } from 'formn';

import { Person } from '../entity/person.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // The ConditionBuilder class is used to build WHERE or ON conditions.
    const cb = new ConditionBuilder();

    // People with a "j" and an "r" in their name, like Jenny Mather.
    const query: Select<Person> = dataContext
      .from(Person, 'p')
      .where(
        cb.and(
          cb.or(
            cb.like('p.firstName', ':letter1', '%j%'),
            cb.like('p.lastName', ':letter1', '%j%')),
          cb.or(
            cb.like('p.firstName', ':letter2', '%r%'),
            cb.like('p.lastName', ':letter2', '%r%'))))
      .select();

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

