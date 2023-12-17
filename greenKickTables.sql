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

CREATE TABLE Meals (
    id SERIAL PRIMARY KEY,
    companyname VARCHAR(100) NOT NULL,
    breakfast VARCHAR(100) NULL,
    lunch VARCHAR(100) NULL,
    dinner VARCHAR(100) NULL,
    milk VARCHAR(100) NULL,
    other VARCHAR(100) NULL,
    entrydate timestamp NULL
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
    customer_query_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    assigned_to_user_id INTEGER NULL,
    assigned_by_user_id INTEGER NOT NULL,
    status INTEGER NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    statuses_json JSON NULL,
    appid INTEGER NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);

INSERT INTO customerformcontrols (json, isDefault, appId) VALUES ('{"id": { "label": "ID", "showInUI": false }, "fullname": { "label": "Name", "showInUI": true }, "age": { "label": "Age", "showInUI": true }, "gender": { "label": "Gender", "showInUI": true }, "notes": { "label": "Notes", "showInUI": true, "type": "textarea" }, "visitdate": { "label": "Visit Date", "showInUI": true }, "mobile": { "label": "Mobile", "showInUI": true }, "address": { "label": "Address", "showInUI": true, "type": "textarea" }, "city": { "label": "City", "showInUI": true }, "email": { "label": "Email", "showInUI": true }, "requiredworkcategory": {
    "label": "Required Work Category", "showInUI": true, "type": "dropdown", "dropdownOptions": { "1": "Construction", "2": "Vastu" }}, "requiredworksubcategory": { "label": "Required Work Sub Category", "showInUI": true }, "referencesource": { "label": "Reference Source", "showInUI": true }, "convertedintolead": { "label": "Converted Into Lead", "showInUI": false }}', false, 2);

update customerformcontrols set json = '{"id":{"label":"ID","showInUI":false},"companyname":{"label":"Company","showInUI":true,"type":"dropdown","dropdownOptions":{"Hyundai Elante":"Hyundai Elante","Hyundai 323":"Hyundai 323","Maruti Sec5":"Maruti Sec5", "Maruti 341": "Maruti 341","TCS":"TCS"}},"breakfast":{"label":"Breakfast","showInUI":true},"lunch":{"label":"Lunch","showInUI":true},"dinner":{"label":"Dinner","showInUI":true},"milk":{"label":"Milk","showInUI":true},"other":{"label":"Other","showInUI":true},"entrydate":{"label":"Date","showInUI":true,"type":"date"}}' where appid = 3

insert into users (fullname, mobile, email, codeword, isadmin, appid, isactive, lastupdatedate) values ('Admin', '9999999999', 'xx@mail.com', '1290', true, 2, true, now());

insert into users (fullname, mobile, email, codeword, isadmin, appid, isactive, lastupdatedate) values ('Dinesh', '9999888811', 'dinesharma@gmail.com', '3147', false, 2, true, now());

insert into users (fullname, mobile, email, codeword, isadmin, appid, isactive, lastupdatedate) values ('Ramandeep', '9999888822', 'ramandeep@gmail.com', '1177', false, 2, true, now());
