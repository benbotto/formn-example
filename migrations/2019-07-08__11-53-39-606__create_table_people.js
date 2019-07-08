'use strict';

module.exports = {
  /**
   * Run the migration.
   */
  up(dataContext) {
    const sql = `
      CREATE TABLE people (
        personID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        firstName VARCHAR(255),
        lastName VARCHAR(255),
        createdOn TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)`;
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
    const sql    = `DROP TABLE people`;
    const params = {};

    console.log(sql);

    return dataContext
      .getExecuter()
      .query(sql, params); 
  }
};
