CREATE TABLE Apps (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE CustomerFormControls (
    id SERIAL PRIMARY KEY,
    json TEXT NOT NULL,
    is_default BOOLEAN NOT NULL,
    app_id INTEGER NOT NULL
);

CREATE TABLE Customers (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    mobile VARCHAR(100) NULL,
    email VARCHAR(100) NULL,
    age INTEGER NULL,
    gender VARCHAR(100) NULL,
    address VARCHAR(250) NULL,
    city VARCHAR(100) NULL
);

CREATE TABLE CustomerRequirements (
    id SERIAL PRIMARY KEY,
    requiredworkcategory INTEGER NOT NULL,
    requiredworksubcategory INTEGER NOT NULL,
    referencesource VARCHAR(100) NULL,
    notes VARCHAR(100) NULL,
    visitdate VARCHAR(100) NOT NULL,
    convertedintolead BOOLEAN NOT NULL,
    customerid INTEGER NOT NULL
);

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100) NULL,
    mobile VARCHAR(20) NULL,
    email VARCHAR(100) NULL,
    codeword VARCHAR(10) NULL,
    isadmin BOOLEAN NOT NULL,
    appid INTEGER NOT NULL,
    isactive BOOLEAN NOT NULL,
    lastupdatedate TIMESTAMP NOT NULL
);

CREATE TABLE Tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NULL,
    description VARCHAR(100) NULL,
    customerQueryId INTEGER NOT NULL,
    customerId INTEGER NOT NULL,
    assignedToUserId INTEGER NULL,
    assignedByUserId INTEGER NOT NULL,
    status INTEGER NOT NULL,
    statusesJson JSON NULL,
    appid INTEGER NOT NULL,
    createdDate TIMESTAMP NOT NULL,
    lastupdatedate TIMESTAMP NOT NULL
);

INSERT INTO customerformcontrols (json, isDefault, appId) VALUES ('{"id": { "label": "ID", "showInUI": false }, "fullname": { "label": "Name", "showInUI": true }, "age": { "label": "Age", "showInUI": true }, "gender": { "label": "Gender", "showInUI": true }, "notes": { "label": "Notes", "showInUI": true, "type": "textarea" }, "visitdate": { "label": "Visit Date", "showInUI": true }, "mobile": { "label": "Mobile", "showInUI": true }, "address": { "label": "Address", "showInUI": true, "type": "textarea" }, "city": { "label": "City", "showInUI": true }, "email": { "label": "Email", "showInUI": true }, "requiredworkcategory": {
    "label": "Required Work Category", "showInUI": true, "type": "dropdown", "dropdownOptions": { "1": "Construction", "2": "Vastu" }}, "requiredworksubcategory": { "label": "Required Work Sub Category", "showInUI": true }, "referencesource": { "label": "Reference Source", "showInUI": true }, "convertedintolead": { "label": "Converted Into Lead", "showInUI": false }}', false, 2);

insert into users (fullname, mobile, email, codeword, isadmin, appid, isactive, lastupdatedate) values ('Admin', '9999999999', 'xx@mail.com', '1290', true, 2, true, now());
