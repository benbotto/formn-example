import { inspect } from 'util';

import { MySQLDataContext, ConnectionOptions, Select } from 'formn';

import { User } from '../entity/user.entity';
import { PhoneNumber } from '../entity/phone-number.entity';

const connOpts: ConnectionOptions = require('../../connections.json');

async function main() {
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    const query: Select<User> = dataContext
      .from(User, 'u')
      .innerJoin(PhoneNumber, 'pn', 'u.phoneNumbers')
      .select(
        'u.id', 'u.firstName', 'u.lastName',
        'pn.id', 'pn.phoneNumber')
      .orderBy('u.firstName', 'u.lastName')

    console.log(query.toString());

    const users: User[] = await query
      .execute();

    console.log(JSON.stringify(users, null, 2));
    console.log(inspect(users, {depth: null, compact: false}));
  }
  catch(err) {
    console.error(err);
  }
  finally {
    await dataContext.end();
  }
}

main();

