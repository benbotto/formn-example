'use strict';

module.exports = {
  /**
   * Run the migration.
   */
  up(dataContext) {
    const sql = `
      CREATE TABLE phone_numbers (
        phoneNumberID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        phoneNumber VARCHAR(255) NOT NULL,
        type VARCHAR(255),
        personID INT NOT NULL,

        CONSTRAINT fk__phone_numbers__personID__people
          FOREIGN KEY (personID) REFERENCES people(personID)
          ON DELETE CASCADE)`;
    const params = {};

    console.log(sql);

    return dataContext
      .getExecuter()
      .query(sql, params); 
  },

  /**
   * Bring down a migration.
   */
  down(dataContext) {
    const sql    = `DROP TABLE phone_numbers`;
    const params = {};

    console.log(sql);

    return dataContext
      .getExecuter()
      .query(sql, params); 
  }
};
