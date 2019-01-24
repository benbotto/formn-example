import { Table, Column, ManyToOne } from 'formn';

import { Person } from './person.entity';

@Table({name: 'phone_numbers'})
export class PhoneNumber {
  @Column({name: 'personID', isNullable: false})
  personId: number;

  @Column({isNullable: false, maxLength: 255})
  phoneNumber: string;

  @Column({name: 'phoneNumberID', isPrimary: true, isGenerated: true, isNullable: false})
  id: number;

  @Column({maxLength: 255})
  type: string;

  @ManyToOne<PhoneNumber, Person>(() => Person, (l, r) => [l.personId, r.id])
  person: Person;
}
