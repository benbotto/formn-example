import { InsertModelValidator } from 'formn';

import { PhoneNumber } from '../../entity/phone-number.entity';

const validator = new InsertModelValidator();

// A valid phone number.
const phone = {
  personId:    1,
  phoneNumber: '530-222-3333',
  type:        'mobile'
};

validator
  .validate(phone, PhoneNumber)
  .then(() => console.log('phone is valid.'));

