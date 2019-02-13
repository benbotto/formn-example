import { inspect } from 'util';

import { MySQLDataContext, ConnectionOptions, Select, ConditionBuilder } from 'formn';

import { Person } from '../entity/person.entity';
import { PhoneNumber} from '../entity/phone-number.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // The ConditionBuilder is used to build the join predicate.
    const cb = new ConditionBuilder();

    // People with their mobile phone numbers, if any.
    const query: Select<Person> = dataContext
      .from(Person, 'p')
      .leftOuterJoin(PhoneNumber, 'pn', 'p.phoneNumbers',
        cb.and(
          cb.eq('p.id', 'pn.personId'),
          cb.eq('pn.type', ':phoneType', 'mobile')))
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

