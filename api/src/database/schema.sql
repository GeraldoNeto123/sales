-- CREATE DATABASE mysales;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS sellers (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,    
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS transactions (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    amount VARCHAR,
    type VARCHAR,
    date TIMESTAMP,
    seller_id UUID,
    product_id UUID,
    PRIMARY KEY (id),
    FOREIGN KEY(seller_id) REFERENCES sellers(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);