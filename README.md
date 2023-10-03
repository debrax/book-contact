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

## TODO
- CRUD categories
- Add contact category relationship
- Add error logging
- Add monitoring logging (request)
- Get contacts: pagination
- Automated test (Postman)

## DONE
- Setup NestJS
- Setup Swagger
- Generate contact CRUD (nest g resource)
- Post contact (setup SQLite)
- Enable swagger plugin (DTO props)
- Setup VS code debug
- Get contacts
- Get contact
- Patch contact
- Delete contact
- Get contact: NotFound
- Patch contact: NotFound, reset nullable props, protect id
- Delete contact: NotFound
- Post contact validation (name required and not empty, email optional)

## TOASK
- Patch contact safely: magic repo.update with delete props before
VS explicit change prop by prop with undefined check