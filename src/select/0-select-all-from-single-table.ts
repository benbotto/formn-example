import { MySQLDataContext, ConnectionOptions, Select } from 'formn';

import { User } from '../entity/user.entity';

const connOpts: ConnectionOptions = require('../../connections.json');

async function main() {
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    const query: Select<User> = dataContext
      .from(User)
      .select();

    console.log(query.toString());

    const users: User[] = await query
      .execute();

    console.log(JSON.stringify(users, null, 2));

    await dataContext.end();
  }
  catch(err) {
    console.error(err);
  }
}

main();

