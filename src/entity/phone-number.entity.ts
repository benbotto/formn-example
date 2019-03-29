import { Validate, PhoneValidator } from 'bsy-validation';

import { Table, Column, ManyToOne } from 'formn';

import { Person } from './person.entity';

@Table({name: 'phone_numbers'})
export class PhoneNumber {
  @Column({name: 'personID', isNullable: false, sqlDataType: 'int'})
  personId: number;

  @Column({isNullable: false, maxLength: 255, sqlDataType: 'varchar'})
  @Validate(new PhoneValidator())
  phoneNumber: string;

  @Column({name: 'phoneNumberID', isPrimary: true, isGenerated: true, isNullable: false, sqlDataType: 'int'})
  id: number;

  @Column({maxLength: 255, sqlDataType: 'varchar'})
  type: string;

  @ManyToOne<PhoneNumber, Person>(() => Person, (l, r) => [l.personId, r.id])
  person: Person;
}
