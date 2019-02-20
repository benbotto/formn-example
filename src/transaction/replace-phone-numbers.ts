import { inspect } from 'util';

import {
  MySQLDataContext, ConnectionOptions, ConditionBuilder,
  MySQLTransactionalDataContext, Delete, MutateResultType, Insert
} from 'formn';

import { PhoneNumber } from '../entity/phone-number.entity';

async function main() {
  const connOpts: ConnectionOptions = require('../../connections.json');
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    // Start the transaction.
    //
    // Note that the supplied function (replacePhoneNumbers) is async, meaning
    // that it implicitly returns a Promise instance.  If that promise is
    // rejected (i.e. an exception occurs), then the transaction will be rolled
    // back; otherwise, the transaction will be automatically committed.
    await dataContext
      .beginTransaction(replacePhoneNumbers);

    await dataContext.end();
  }
  catch(err) {
    console.error(err);
  }
}

/**
 * Replace the phone numbers for a person.
 */
async function replacePhoneNumbers(
  transDataContext: MySQLTransactionalDataContext): Promise<void> {
  // Delete all phone numbers for the person with ID 1.
  const cb = new ConditionBuilder();

  const qDelPhone: Delete = transDataContext
    .from(PhoneNumber, 'pn')
    .where(cb.eq('pn.personId', ':pid', 1))
    .delete();

  console.log(qDelPhone.toString());

  const qDelPhoneRes: MutateResultType = await qDelPhone.execute();

  console.log(inspect(qDelPhoneRes, {depth: null, compact: false}));

  // Create two new phone numbers for the person with ID 1.
  const phones = [new PhoneNumber(), new PhoneNumber()];

  phones[0].personId    = 1;
  phones[0].phoneNumber = '111-222-3333';
  phones[0].type        = 'cell';

  phones[1].personId    = 1;
  phones[1].phoneNumber = '444-555-6666';
  phones[1].type        = 'office';

  // Insert each phone number, logging the SQL.
  for (let i = 0; i < phones.length; ++i) {
    const qInsPhone: Insert<PhoneNumber> = transDataContext
      .insert(PhoneNumber, phones[i]);

    console.log(qInsPhone.toString());

    await qInsPhone.execute();

    // An id will be set on the PhoneNumber instance.
    console.log(inspect(phones[i], {depth: null, compact: false}));
  }

  // The transaction can be rolled back manually.
  //await transDataContext.rollbackTransaction();
}

main();

