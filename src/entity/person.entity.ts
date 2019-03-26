import { Table, Column, OneToMany } from 'formn';

import { PhoneNumber } from './phone-number.entity';

@Table({name: 'people'})
export class Person {
  @Column({hasDefault: true, isNullable: false, sqlDataType: 'timestamp'})
  createdOn: Date;

  @Column({maxLength: 255, sqlDataType: 'varchar'})
  firstName: string;

  @Column({maxLength: 255, sqlDataType: 'varchar'})
  lastName: string;

  @Column({name: 'personID', isPrimary: true, isGenerated: true, isNullable: false, sqlDataType: 'int'})
  id: number;

  @OneToMany<Person, PhoneNumber>(() => PhoneNumber, (l, r) => [l.id, r.personId])
  phoneNumbers: PhoneNumber[];
}
