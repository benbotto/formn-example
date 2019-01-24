import { Table, Column, OneToMany } from 'formn';

import { PhoneNumber } from './phone-number.entity';

@Table({name: 'people'})
export class Person {
  @Column({hasDefault: true, isNullable: false})
  createdOn: Date;

  @Column({maxLength: 255})
  firstName: string;

  @Column({maxLength: 255})
  lastName: string;

  @Column({name: 'personID', isPrimary: true, isGenerated: true, isNullable: false})
  id: number;

  @OneToMany<Person, PhoneNumber>(() => PhoneNumber, (l, r) => [l.id, r.personId])
  phoneNumbers: PhoneNumber[];
}
