DROP DATABASE IF EXISTS games_db;
CREATE DATABASE games_db; 
USE games_db; 

CREATE TABLE games( 
    id INTEGER(100) AUTO_INCREMENT NOT NULL, 
    name VARCHAR(100),
    played INTEGER(100),
    PRIMARY KEY (id)
);


