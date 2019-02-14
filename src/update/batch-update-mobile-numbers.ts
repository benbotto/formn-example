import { inspect } from 'util';

import {
  MySQLDataContext, ConnectionOptions, ConditionBuilder, Update,
  MutateResultType
} from 'formn';

import { PhoneNumber } from '../entity/phone-number.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);
    
    // Used for building the update statement's where clause.
    const cb = new ConditionBuilder();

    // Change phone_numbers.type from "mobile" to "cell."
    const query: Update = dataContext
      .from(PhoneNumber, 'pn')
      .where(cb.eq('pn.type', ':mob', 'mobile'))
      .update({'pn.type': 'cell'});

    console.log(query.toString());

    // The result contains at least an affectedRows property,
    // along with driver-specific metadata.
    const result: MutateResultType = await query.execute();

    console.log(inspect(result, {depth: null, compact: false}));

    await dataContext.end();
  }
  catch(err) {
    console.error(err);
  }
}

main();

