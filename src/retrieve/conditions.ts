import { inspect } from 'util';

import { MySQLDataContext, ConnectionOptions, Select } from 'formn';

import { Person } from '../entity/person.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // People with a "j" and an "r" in their name, like Jenny Mather.
    const query: Select<Person> = dataContext
      .from(Person, 'p')
      .where(
        {
          $and: [
            {
              $or: [
                {$like: {'p.firstName': ':letter1'}},
                {$like: {'p.lastName': ':letter1'}}
              ]
            },
            {
              $or: [
                {$like: {'p.firstName': ':letter2'}},
                {$like: {'p.lastName': ':letter2'}}
              ]
            }
          ]
        },
        {letter1: '%j%', letter2: '%r'})
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

