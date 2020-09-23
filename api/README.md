# API

This simple API uses a unique router and a unique Controller for every request coming from every path in the front-end.

That route and that Controller are named "universal.js" and "Universal.js".

Main modules of this API:

- Express
- Nodemon
- Sequelize
- Postgres (with Docker)

### Intalling and initializing Postgres on Docker

1. Installation:

   ```bash
   $ docker run --name my_postgres -e POSTGRES_PASSWORD=mypass -p 5432:5432 -d postgres:11
   ```

2. Initalization:
   ```bash
   $ docker start my_postgres
   ```

### Running migrations for the database with Sequelize

```javascript
$ npx sequelize-cli db:migrate
```
