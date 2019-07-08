'use strict';

const people = [
  {
    firstName: 'Joe',
    lastName: 'Shmo',
    phoneNumbers: [
      {phoneNumber: '530-307-8810', type: 'mobile'},
      {phoneNumber: '916-200-1440', type: 'home'},
      {phoneNumber: '916-293-4667', type: 'office'}
    ]
  },
  {
    firstName: 'Rand',
    lastName: 'AlThore',
    phoneNumbers: [
      {phoneNumber: '666-451-4412', type: 'mobile'}
    ]
  },
];

module.exports = {
  /**
   * Run the migration.
   */
  async up(dataContext) {
    const results = [];

    for (let i = 0; i < people.length; ++i) {
      // Find the personID by firstName and lastName.
      const selPerson = `
        SELECT  p.personID
        FROM    people p
        WHERE   p.firstName = :firstName
          AND   p.lastName = :lastName`;
      const person = people[i];

      console.log(selPerson);
      console.log(person);

      const [rows] = await dataContext
        .getExecuter()
        .query(selPerson, person);
      const personID = rows[0].personID;

      // Insert each phone number.
      for (let j = 0; j < person.phoneNumbers.length; ++j) {
        const insPhone = `
          INSERT INTO phone_numbers (personID, phoneNumber, type)
          VALUES (:personID, :phoneNumber, :type)`;
        const phone = person.phoneNumbers[j];

        phone.personID = personID;

        console.log(insPhone);
        console.log(phone);

        const result = await dataContext
          .getExecuter()
          .query(insPhone, phone);

        results.push(result);
      }
    }

    return results;
  },

  /**
   * Bring down a migration.
   */
  async down(dataContext) {
    const results = [];

    // All phone numbers in a flattened array.
    const phones = people
      .reduce((phones, person) => phones
        .concat(person.phoneNumbers), []);

    for (let i = 0; i < phones.length; ++i) {
      const sql = `
        DELETE
        FROM   phone_numbers
        WHERE  phoneNumber = :phoneNumber
          AND  type = :type`;
      const params = phones[i];

      console.log(sql);
      console.log(params);

      const result = await dataContext
        .getExecuter()
        .query(sql, params);

      results.push(result);
    }

    return results;
  }
};
