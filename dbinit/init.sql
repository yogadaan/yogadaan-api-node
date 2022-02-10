CREATE DATABASE IF NOT EXISTS reportsFeed;

USE reportsFeed;

DROP TABLE IF EXISTS reportsFeed;

CREATE TABLE reports(
    uUID VARCHAR(255) DEFAULT NULL,
    caseId VARCHAR(255) DEFAULT NULL,
    victimName VARCHAR(255) DEFAULT NULL,
    vTime TIME DEFAULT NULL,
    cType VARCHAR(255) DEFAULT NULL,
    caseAccepted BOOLEAN,
    orgAssigned VARCHAR(255) DEFAULT NULL,
    caseStatus VARCHAR(255) DEFAULT NULL,
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
    phoneNumber VARCHAR(255) DEFAULT NULL,
);

CREATE TABLE org(
    uUID VARCHAR(255) DEFAULT NULL,
    orgName VARCHAR(255) DEFAULT NULL,
    orgEmail VARCHAR(255) DEFAULT NULL,
    orgPhone VARCHAR(255) DEFAULT NULL,
    orgType VARCHAR(255) DEFAULT NULL,
    orgLocation VARCHAR(255) DEFAULT NULL,
    totalCasesAccepted VARCHAR(255) DEFAULT NULL
);

