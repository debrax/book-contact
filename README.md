# Contact book

API to manage a contact book (hobby project for learning).

## Run
- npm i
- npm run start
- localhost:3000/api

## Stack

- Framework: NestJS (NodeJS)
- ORM: TypeORM
- DB: SQLite
- Doc: Swagger

## DONE
- Delete contact: NotFound
- Patch contact: NotFound, reset nullable props, protect id
- Get contact: NotFound
- Delete contact
- Patch contact
- Get contact
- Get contacts
- Setup VS code debug
- Enable swagger plugin (DTO props)
- Post contact (setup DB)
- Generate contact CRUD (nest g resource)
- Setup Swagger
- Setup NestJS

## TODO
- Validate name (required not empty) and email (optional formatted)
- CRUD categories
- Add contact category relationship
- Add error logging
- Add monitoring logging (request)
- Get contacts: pagination
- Automated test (Postman)

## TOASK
- Patch contact safely: magic repo.update with delete props before
VS explicit change prop by prop with undefined check