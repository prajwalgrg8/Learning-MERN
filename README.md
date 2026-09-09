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