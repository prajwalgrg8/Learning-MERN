# Node.js

- Node.js is a javascript run-time environment.
- Run time environment: A program that runs another program.
- With the help of node.js, we can run JS in local machine.
- Used to build: API, real time apps, micro-services, servers and so on.
- Built on C++
- Powered by Google Chrome V8 engine.

## Architecture

- Single-threaded
- Non-blocking I/O operation
- Event loop

### Express.js

- It is a Node.js API/Web framework.
- Used to build API.
- Minimalist, fast and unopinionated.
- It simplifies the http module of node.js.

#### HTTP methods

- GET (Read/Fetch)
- POST (Create)
- PUT (Update)
- PATCH (Partial Update)
- DELETE (Delete)

##### REST API

- JSON.stringify: JS oBJECT => JSON
- JSON.pasrse: JSON => JS Object

##### Layered Architecture

1. Api Layer
    - Routes: endPoints
    - Controller: Request/Response handling
    - Middleware: Authentication/Authorization

2. Business Service Layer
    -Services: 

3. Data Layer
    - Models 
    - Schemas

###### MangoDB

- Non-relational database
- Data are stored in collections and documents.
- Database: Main container where all the datas are stored as a collection.
- Collection: Equivalent to table of relational database.
- Document: Equivalent to rows of relational database.
- Field: Equivalent to columns of relational database.
- Local: MangoDB Compass
- Cloude: MangoDB Atlas

###### MangoDB Queries

- "show dbs" : Show list of existing databases.
- "use <Dbname> : Use existing database or create a new database.

- Create:
    "db.<collectionName>.insertOne({name: "Goray"}) - For single
    "db.<collectionName>.insertMany({name: "Genji"}, {name: "Serizawa"}) - For multiple

- Read:
    - "db.users.find() - Show all the users data
    - "db.users.find({age:20}) - Show users with age 20
    - "db.users.findOne({age:20}) - Limit One

- Update:
    - db.users.updateOne({name: "Goray"}, {$set: {age: 25}}) - Updating user with name Goray

- Delete:
    - db.users.deleteOne({name: "Hari"}) - Deleting user with name Hari

###### Complex Filters

    - db.users.find({name:{$eq:"Goray"}}) - User with name equals to Goray
    - db.users.find({name:{$ne:"Goray"}}) - All users except user with name Goray
    - db.users.find({age:{$gt:20}}) - User with age greater than 20 
    - db.users.find({age:{$gte:20}}) - User with age greater or equals to 20 
    - db.users.find({age:{$lt:20}}) - User with age less to 20 
    - db.users.find({age:{$lte:20}}) - User with age lesser or equals to 20 
    - db.users.find({$and: [{name: "Goray", age:25}]}) - AND Operation
    - db.users.find({$or: [{name: "Goray", age:25}]}) - OR operation

    - Limit: db.users.find().limit(2) - First 2 users
    - Skip: db.users.find().skip(2) - Skip first 2 users
    - Sort: db.users.find().sort({name:1}) - ascending by name
            db.users.find().sort({name:-1}) - descending by name

###### Mongoose

    - ODM (Object Data Modeling) of MongoDB for Node.js
    - Create Schemas (Properties or rules of a data/entity)
    - Validate Schemas
    - Create models (usable form of a schema) using schemas
    - Relationships
    