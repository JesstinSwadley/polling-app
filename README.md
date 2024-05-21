# Node-React Polling App
A simple polling app that allows users to create and participate in polls

## Usage
### Server
```
# navigate to the server directory
$ cd server

# generate database migration for PostgreSQL
$ npm run db:generate

# apply database migration
$ (ENV_VAR) npm run db:migrate

# compile the TypeScript code
$ npm run build

# run the server
$ (ENV_VAR) npm run start
```
## Enviornment Varialbes
### Server
```
PORT="SERVER_PORT"
DB_HOST="DATABASE_URL"
DB_PORT="DATABASE_PORT"
DB_USER="DATABASE_USER"
DB_PASSWORD="DATABASE_PASSWORD"
DB_DATABASE="DATABASE_NAME"
```

## License
[MIT](https://choosealicense.com/licenses/mit/)