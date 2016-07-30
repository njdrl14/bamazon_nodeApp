CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    
    product_name VARCHAR(100) NOT NULL,
    
    department_name VARCHAR(30) NOT NULL,
    
    price DECIMAL(15,2),
    
    stock_quantity INTEGER(10) NOT NULL,
    
    PRIMARY KEY (id)
    
    );
    
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Epiphone Gibson Les Paul(black)","Musical Instruments",350.00,10);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Samsung 4k 50inch tv","Electronics",1500.00,5);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Radiohead OK Computer VINYL","Music",20.00,10);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Xbox One 500GB console","VideoGames",400.00,10);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Everybody Loves Raymond boxset","Movies/TV",50.00,7);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Dirt Devil Vacuum","Home Appliances",60.00,10);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Ron Jon 6'6 foot surfboard","Outdoor Equipment",300.00,4);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Harry Potter and the Cursed Child","Books",25.00,10);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Derek Jeter Autographed Baseball","Collectibles",500.00,1);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Samsung ChromeBook 15.0 inch","Computers",450.00,5);

SELECT * FROM products;
