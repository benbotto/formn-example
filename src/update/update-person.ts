import { inspect } from 'util';

import {
  MySQLDataContext, ConnectionOptions, ConditionBuilder, UpdateModel
} from 'formn';

import { Person } from '../entity/person.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // Update the first name of the person with ID 1.
    const person = new Person();

    person.id = 1;
    person.firstName = 'Marco';

    const query: UpdateModel<Person> = dataContext
      .update(Person, person);

    console.log(query.toString());

    // If no rows are affected (i.e. if a person with an id of 1 does not
    // exist), then an error will be raised.
    await query.execute();
    await dataContext.end();
  }
  catch(err) {
    console.error(err);
  }
}

main();

