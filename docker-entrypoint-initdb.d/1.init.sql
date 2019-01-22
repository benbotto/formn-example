GRANT SELECT, INSERT, UPDATE, DELETE
  ON `formn_test_db`.* to 'formn-user'@'%'
  IDENTIFIED BY 'formn-password';

CREATE TABLE people (
  personID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  createdOn TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

INSERT INTO people (firstName, lastName) VALUES ('Joe', 'Shmo');
INSERT INTO people (firstName, lastName) VALUES ('Rand', 'AlThore');
INSERT INTO people (firstName, lastName) VALUES ('Holly', 'Davis');
INSERT INTO people (firstName, lastName) VALUES ('Jenny', 'Mather');

CREATE TABLE phone_numbers (
  phoneNumberID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  phoneNumber VARCHAR(255) NOT NULL,
  type VARCHAR(255),
  personID INT NOT NULL,

  CONSTRAINT fk__phone_numbers__personID__people
    FOREIGN KEY (personID) REFERENCES people(personID)
    ON DELETE CASCADE);

INSERT INTO phone_numbers (personID, phoneNumber, type) VALUES (1, '530-307-8810', 'mobile');
INSERT INTO phone_numbers (personID, phoneNumber, type) VALUES (1, '916-200-1440', 'home');
INSERT INTO phone_numbers (personID, phoneNumber, type) VALUES (1, '916-293-4667', 'office');
INSERT INTO phone_numbers (personID, phoneNumber, type) VALUES (2, '666-451-4412', 'mobile');

