import { UpdateModelValidator } from 'formn';

import { PhoneNumber } from '../../entity/phone-number.entity';

const validator = new UpdateModelValidator();

// "phoneNumber" is not a valid phone number.
const phone = {
  id: 1,
  phoneNumber: 'bad phone number'
};

validator
  .validate(phone, PhoneNumber)
  .catch(err => console.error(JSON.stringify(err, null, 2)));
