import { inspect } from 'util';

import {
  MySQLDataContext, ConnectionOptions, ConditionBuilder, Delete,
  MutateResultType
} from 'formn';

import { PhoneNumber } from '../entity/phone-number.entity';
import { Person } from '../entity/person.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // Used for building the delete's where clause.
    const cb = new ConditionBuilder();

    // Delete all PhoneNumber (pn) records for the Person (p) named
    // "Rand Althore."
    const query: Delete = dataContext
      .from(PhoneNumber, 'pn')
      .innerJoin(Person, 'p', 'pn.person')
      .where(
        cb.and(
          cb.eq('p.firstName', ':fname', 'Rand'),
          cb.eq('p.lastName', ':lname', 'AlThore')))
      .delete('pn');

    console.log(query.toString());

    // The result will have at least an affectedRows property.
    const result: MutateResultType = await query.execute();

    console.log(inspect(result, {depth: null, compact: false}));

    await dataContext.end();
  }
  catch(err) {
    console.error(err);
  }
}

main();

