import { DeleteModelValidator } from 'formn';

import { PhoneNumber } from '../../entity/phone-number.entity';

const validator = new DeleteModelValidator();

// "id" must be defined, because it's associated with the primary key column.
//
// "phoneNumber" and "personId" are non-nullable, so they must be defined.
const phone = {
};

validator
  .validate(phone, PhoneNumber)
  .catch(err => console.error(JSON.stringify(err, null, 2)));
