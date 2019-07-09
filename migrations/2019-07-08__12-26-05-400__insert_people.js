'use strict';

const people = [
  {firstName: 'Joe', lastName: 'Shmo'},
  {firstName: 'Rand', lastName: 'al\'Thor'},
  {firstName: 'Holly', lastName: 'Davis'},
  {firstName: 'Jenny', lastName: 'Mather'},
];

module.exports = {
  /**
   * Run the migration.
   */
  async up(dataContext) {
    const results = [];

    for (let i = 0; i < people.length; ++i) {
      const sql    = 'INSERT INTO people (firstName, lastName) VALUES (:firstName, :lastName)';
      const params = people[i];

      console.log(sql);
      console.log(params);

      const result = await dataContext
        .getExecuter()
        .query(sql, params);

      results.push(result);
    }

    return results;
  },

  /**
   * Bring down a migration.
   */
  async down(dataContext) {
    const results = [];

    for (let i = 0; i < people.length; ++i) {
      const sql    = 'DELETE FROM people WHERE firstName = :firstName AND lastName = :lastName';
      const params = people[i];

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
