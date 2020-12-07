## RESTful Web App with Node.js, Express, and MySql.

##### This is a simple web application to demonstrate my knowledge of SQL and JavaScript, and understanding of client-server communication.
---
### `Localhost source`



-   baseUrl: http://localhost:3050
-   Requirements for localhost:
    -  Node.js 
    -  MySql 
    

### `Features`


### `How to install`

#### Using Git (recommended)

1.  Clone the project from github. 

```bash
git clone https://github.com/NestorCastillo10/MySql-Node.git 
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Important!! Start the SQL database server before installing the application.

- If you have this error "NodeJS MySQL Client does not support authentication protocol" during app installation,
...execute the following queries in MYSQL Workbench.
```bash
ALTER USER 'root'@'localhost' IDENTIFIED BY 'pass'; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pass';
FLUSH PRIVILEGES;
```

### Install npm dependencies and start app

```bash
npm install
npm node index.js
```




