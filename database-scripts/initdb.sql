-- improve table recreation for production
DROP DATABASE IF EXISTS ts_rest_api_db;

CREATE DATABASE ts_rest_api_db WITH ENCODING 'UTF8';

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE items (
    id uuid DEFAULT uuid_generate_v4 (),
    prop1 VARCHAR(30),
    prop2 FLOAT,
    createdAt TIMESTAMP DEFAULT current_timestamp,
    updatedAt TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);