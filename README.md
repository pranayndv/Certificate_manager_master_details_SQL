﻿# Certificate_manager_master_details_SQL
#  To run the code follow the above steps


1) Login with MySQL database in SHELL using PASS.

2) Enter Following QUERIES in SHELL
   
   2.1) CREATE DATABASE certificate_manager;
   
   2.2) CREATE USER 'node_user'@'localhost' IDENTIFIED BY 'password123';
   
   2.3) GRANT ALL PRIVILEGES ON certificate_manager.* TO 'node_user'@'localhost';
        FLUSH PRIVILEGES;
   
3)  Create .env file in /server folder paste the following credentials carefully.


        DB_HOST=localhost
	DB_NAME=certificate_manager
	DB_USER=node_user
	DB_PASSWORD=password123
	PORT=5000


4) Move folder to cd client and cd server in terminal

5) npm install (server)

6) Run the server " nodemon app/ node app " in terminal

7) npm install (client)

8) Run the Client "npm start" in terminal
