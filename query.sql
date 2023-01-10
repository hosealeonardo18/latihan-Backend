-- create table
CREATE TABLE products(
    id int PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL,
    price int NOT NULL,
    stock int
); 


-- insert data table products
INSERT INTO products(id, name, price, stock) 
VALUES (1, 'Kemeja Executive', 150000, 20),
        (2, 'Kemeja H&M', 250000, 25),
        (3, 'Celana Jeans Levis', 150000, 15),
        (4, 'Kaos Polos', 80000, 30);


-- read data table products
SELECT * FROM products;

-- update data products
UPDATE products SET name='Kaos Oblong', price = 50000, stock = 50 WHERE id = 4;

-- delete products
DELETE FROM products WHERE id = 3;
 