# ts-rest-api-playground_server

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Description

This is a boilerplate **REST API** built from scratch in **TypeScript / Express.js / Node.js** to perform generic **CRUD operations** with generic items. It follows HATEOAS best practices and includes ROUTE VALIDATION using json schemas with [express-json-validator-middleware](https://www.npmjs.com/package/express-json-validator-middleware).

## Technologies

- TypeScript, Express.js, Node.js
- Docker Containers
- Postgres Relational Database
- TypeORM as Database Manager Client
- More tech...

## Prerequisies

You will need to install in your machine:

- Node 16
- Docker (with Hyper-V enabled)
- Docker-compose
- Install mkcert globally

## Development Server

After installing the prerequisites and making sure the Docker service is running in your local machine:

1. Run `npm install`
2. Once is complete, run `npm start` and the app will compile, build the docker image and launch the docker containers for development purposes

## Next Steps

- [ ] Auth and Route Guards (Using PassportJS that allows Json Web Tockens (jwt), Social Providers like Google/Facebook/..., and 100+ strategies)
- [ ] Deploy with Vercel / Continuous Integration (CI) with Github Actions
- [ ] Code improvements following Best Practices
- [ ] Security enhancements
- [ ] Tests (Unit Tests and End-to-end a.k.a. e2e)

## Author

Alexandre Gimenez
