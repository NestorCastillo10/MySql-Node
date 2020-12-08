## REST Web App with Node.js, Express, and MySql.

##### This is a simple web application to demonstrate my knowledge of SQL and JavaScript, and understanding of client-server communication.
---
### `Localhost source`



-   baseUrl: http://localhost:3050
-   Requirements for localhost:
    -  Node.js 
    -  MySql 
    


### `How to install`

#### Using Git (recommended)

1.  Clone the project from github. 

```bash
git clone https://github.com/NestorCastillo10/MySql-Node.git 
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Prepare your local SQL database server before installing the application.

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




