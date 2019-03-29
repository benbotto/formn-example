import { InsertModelValidator } from 'formn';

import { PhoneNumber } from '../../entity/phone-number.entity';

const validator = new InsertModelValidator();

// "personId" has an invalid data type (not an integer).
//
// "type" has an invalid data type (not a string).
const phone = {
  phoneNumber: '530-222-1111',
  personId: 3.14,
  type: false
};

validator
  .validate(phone, PhoneNumber)
  .catch(err => console.error(JSON.stringify(err, null, 2)));

