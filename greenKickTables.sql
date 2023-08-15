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
    requiredworkSubcategory INTEGER NOT NULL,
    referencesource VARCHAR(100) NULL,
    notes VARCHAR(100) NULL,
    visitdate VARCHAR(100) NOT NULL,
    convertedintolead BOOLEAN NOT NULL,
    customerid INTEGER NOT NULL
);

INSERT INTO customerformcontrols (json, isDefault, appId) VALUES ('{"id": { "label": "ID", "showInUI": false }, "fullname": { "label": "Name", "showInUI": true }, "age": { "label": "Age", "showInUI": true }, "gender": { "label": "Gender", "showInUI": true }, "notes": { "label": "Notes", "showInUI": true, "type": "textarea" }, "visitDate": { "label": "Visit Date", "showInUI": true }, "mobile": { "label": "Mobile", "showInUI": true }, "address": { "label": "Address", "showInUI": true, "type": "textarea" }, "city": { "label": "City", "showInUI": true }, "email": { "label": "Email", "showInUI": true }, "requiredWorkCategory": {
    "label": "Required Work Category", "showInUI": true, "type": "dropdown", "dropdownOptions": { "1": "Construction", "2": "Vastu" }}, "requiredWorkSubCategory": { "label": "Required Work Sub Category", "showInUI": true }, "referenceSource": { "label": "Reference Source", "showInUI": true }, "convertedIntoLead": { "label": "Converted Into Lead", "showInUI": false }}', false, 2);
