import { InsertModelValidator } from 'formn';

import { PhoneNumber } from '../../entity/phone-number.entity';

const validator = new InsertModelValidator();

// "id" cannot be defined because it's generated (an auto-incrementing
// primary key).
//
// "phoneNumber" and "personId" are non-nullable, so they must be defined.
const phone = {
  id: 1
};

validator
  .validate(phone, PhoneNumber)
  .catch(err => console.error(JSON.stringify(err, null, 2)));
