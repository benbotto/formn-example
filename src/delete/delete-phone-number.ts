import {
  MySQLDataContext, ConnectionOptions, DeleteModel
} from 'formn';

import { PhoneNumber } from '../entity/phone-number.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // Delete the PhoneNumber with ID 1.
    const phone = new PhoneNumber();

    phone.id = 1;

    const query: DeleteModel<PhoneNumber> = dataContext
      .delete(PhoneNumber, phone);

    console.log(query.toString());

    // If no rows are affected (i.e. if a phone number with an id of 1 does not
    // exist), then an error will be raised.
    await query.execute();
    await dataContext.end();
  }
  catch(err) {
    console.error(err);
  }
}

main();

