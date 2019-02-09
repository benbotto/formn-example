import { MySQLDataContext, ConnectionOptions, Select, MySQLTransactionalDataContext } from 'formn';

import { User } from '../entity/user.entity';
import { PhoneNumber } from '../entity/phone-number.entity';

const connOpts: ConnectionOptions = require('../../connections.json');

async function main() {
  const dataContext = new MySQLDataContext();

  try {
    await dataContext.connect(connOpts);

    await dataContext
      .beginTransaction(async (transDC: MySQLTransactionalDataContext) => {
        const user = new User();

        user.firstName    = 'Pete';
        user.lastName     = 'Rose';
        user.phoneNumbers = [];

        const insUserQuery = transDC.insert(User, user);

        console.log(insUserQuery.toString());

        await insUserQuery.execute();

        const mobile = new PhoneNumber();
        mobile.userId = user.id;
        mobile.type = 'mobile';
        mobile.phoneNumber = '321-456-7894';

        user.phoneNumbers.push(mobile);

        const insMobileQuery = transDC.insert(PhoneNumber, mobile);
        console.log(insMobileQuery.toString());

        const home  = new PhoneNumber();
        home.userId = user.id;
        home.type = 'home';
        home.phoneNumber = '664-456-7879';

        user.phoneNumbers.push(home);

        const insHomeQuery = transDC.insert(PhoneNumber, home);
        console.log(insHomeQuery.toString());

        await Promise.all([insMobileQuery.execute(), insHomeQuery.execute()]);

        console.log(JSON.stringify(user, null, 2));

        await transDC.rollbackTransaction();
      });
  }
  catch(err) {
    console.error(err);
  }
  finally {
    await dataContext.end();
  }
}

main();

