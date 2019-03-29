import { DeleteModelValidator } from 'formn';

import { PhoneNumber } from '../../entity/phone-number.entity';

const validator = new DeleteModelValidator();

// Passes validation because "id" is defined, even though "phoneNumber"
// is invalid.
const phone = {
  id: 1,
  phoneNumber: 'invalid phone number'
};

validator
  .validate(phone, PhoneNumber)
  .then(() => console.log('phone is valid.'))
  .catch(err => console.error(JSON.stringify(err, null, 2)));
