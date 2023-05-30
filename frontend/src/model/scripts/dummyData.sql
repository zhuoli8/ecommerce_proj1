INSERT INTO customers (first_name, last_name, email, phone, address, city, postal_code, country)
VALUES ('John', 'Doe', 'johndoe@example.com', '1234567890', '123 Main Street', 'Cityville', '12345', 'United States');

INSERT INTO customers (first_name, last_name, email, phone, address, city, postal_code, country)
VALUES ('Jane', 'Smith', 'janesmith@example.com', '9876543210', '456 Elm Street', 'Townsville', '67890', 'United States');



INSERT INTO products (name, description, price, quantity)
VALUES ('Widget A', 'A high-quality widget', 19.99, 100);

INSERT INTO products (name, description, price, quantity)
VALUES ('Widget B', 'An advanced widget with additional features', 29.99, 50);



INSERT INTO orders (customer_id, order_date, total_price, status)
VALUES (1, '2023-05-23', 39.98, 'Completed');

INSERT INTO orders (customer_id, order_date, total_price, status)
VALUES (2, '2023-05-22', 59.98, 'Pending');



INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES (1, 1, 2, 39.98);

INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES (2, 2, 2, 59.98);
