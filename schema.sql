DROP DATABASE IF EXISTS greatbayDB;

CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE items (
    id INTEGER NOT NULL AUTO_INCREMENT,
    item_name VARCHAR (50) NOT NULL,
    category VARCHAR (50) NOT NULL,
    starting_big INTEGER(10) DEFAULT 0,
    highest_bid INTEGER(10) DEFAULT 0,
    PRIMARY KEY (id)
);