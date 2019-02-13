import { inspect } from 'util';

import { MySQLDataContext, ConnectionOptions, Select } from 'formn';

import { Person } from '../entity/person.entity';
import { PhoneNumber} from '../entity/phone-number.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // PhoneNumbers with People.
    const query: Select<PhoneNumber> = dataContext
      .from(PhoneNumber, 'pn')
      .innerJoin(Person, 'p', 'pn.person')
      .select();

    console.log(query.toString());

    const phones: PhoneNumber[] = await query
      .execute();

    console.log(inspect(phones, {depth: null, compact: false}));

    await dataContext.end();
  }
  catch(err) {
    console.error(err);
  }
}

main();

