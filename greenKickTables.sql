CREATE TABLE Apps (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE CustomerFormControls (
    id SERIAL PRIMARY KEY,
    json TEXT NOT NULL,
    isDefault BOOLEAN NOT NULL,
    appId INTEGER NOT NULL
);

CREATE TABLE Customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mobile VARCHAR(100) NULL,
    email VARCHAR(100) NULL,
    age INTEGER NULL,
    gender VARCHAR(100) NULL,
    address VARCHAR(250) NULL,
    city VARCHAR(100) NULL
);

CREATE TABLE CustomerRequirements (
    id SERIAL PRIMARY KEY,
    requiredWorkCategory VARCHAR(100) NOT NULL,
    requiredWorkSubCategory VARCHAR(100) NOT NULL,
    referenceSource VARCHAR(100) NULL,
    notes VARCHAR(100) NULL,
    visitDate VARCHAR(100) NOT NULL,
    convertedIntoLead BOOLEAN NOT NULL,
    customerId INTEGER NOT NULL
);