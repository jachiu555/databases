CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  content TEXT NOT NULL
);

/* Create other tables and define schemas for them here! */

-- CREATE TABLE  (
--   /* Describe your table here.*/
--   id INTEGER PRIMARY KEY,
--   username TEXT NOT NULL,
--   content TEXT NOT NULL
-- );



/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

