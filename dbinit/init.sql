CREATE DATABASE IF NOT EXISTS reportsFeed;

USE reportsFeed;

DROP TABLE IF EXISTS reportsFeed;

CREATE TABLE reports(
    uUID VARCHAR(255) DEFAULT NULL,
    caseId VARCHAR(255) DEFAULT NULL,
    victimName VARCHAR(255) DEFAULT NULL,
    vTime TIME DEFAULT NULL,
    cType VARCHAR(255) DEFAULT NULL,
    cImage VARCHAR(255) DEFAULT NULL,
    severity VARCHAR(255) DEFAULT NULL,
    vLocation VARCHAR(255) DEFAULT NULL,
    inform VARCHAR(255) DEFAULT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT UQ_VICTIM_EMAIL UNIQUE (uUID)
);

CREATE TABLE user(
    uUID VARCHAR(255) DEFAULT NULL,
    userName VARCHAR(255) DEFAULT NULL,
    userEmail VARCHAR(255) DEFAULT NULL,
    phoneNumber VARCHAR(255) DEFAULT NULL
);

