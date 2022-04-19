# ts-rest-api-playground-server

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Description

This is a boilerplate **REST API** built from scratch in **TypeScript / Express.js / Node.js** to perform generic **CRUD operations** with generic items. It follows HATEOAS best practices and includes ROUTE VALIDATION using json schemas with [express-json-validator-middleware](https://www.npmjs.com/package/express-json-validator-middleware).

## Technologies

- TypeScript, Express.js, Node.js
- Docker Containers
- Postgres Relational Database
- TypeORM as Database Manager Client
- Amazon Web Services
- [Google Cloud Functions](https://cloud.google.com/functions/)
- [Serverless Framework](https://github.com/serverless/serverless)

## Prerequisites

The app requires from you to install and set-up:

- Node 16
- Docker (with Hyper-V enabled)
- Docker-compose
- Install mkcert globally
- pgAdmin
- [gcloud](https://cloud.google.com/sdk/docs/install) globally installed
- Follow the instructions for Creating your "Amazon RDS for Postgres Set-up"

Install serverless framework globally with `npm install -g serverless` and configure your credentials for the Cloud Vendor following the steps from [Cloud Vendor credentials set-up](#Cloud%20Vendor%20credentials%20set-up)
You can follow this tutorial about [how to set-up AWS credentials in Serverless Framework](https://www.youtube.com/watch?v=KngM5bfpttA)

NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.
Depending on your preferred package manager, follow the instructions below to deploy the project to the cloud

<!--

# Cloud Vendor credentials set-up

1. Run `gcloud auth application-default login` to login in Google Cloud -->

## Development Server

After installing the prerequisites and making sure the Docker service is running in your local machine:

1. Run `npm install`
2. Follow the steps to configure the Serverless connection with the Cloud Vendor
3. Once is complete, run `npm start` and the app will compile, build the docker image and launch the docker containers for development purposes

**Invoke the function locally.**

```
serverless invoke local --function hello
```

**Invoke the function**

```
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/
```

## Next Steps

- [ ] Auth and Route Guards (Using PassportJS that allows Json Web Tockens (jwt), Social Providers like Google/Facebook/..., and 100+ strategies)
- [ ] Deploy with AWS / Continuous Integration (CI) with Github Actions
- [ ] Code improvements following Best Practices
- [ ] Security enhancements
- [ ] Tests (Unit Tests and End-to-end a.k.a. e2e)

## Author

Alexandre Gimenez
