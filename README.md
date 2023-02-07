<p align="center">
  <h1>Microsserviço de autenticação</h1>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Como executar">Como executar</a>
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- typescript
- bcryptjs
- cors
- dotenv
- express
- express-async-errors
- jsonwebtoken
- prisma
- @prisma/client
- http-status-codes
- zod
- uuid
- Docker
- Docker compose

## 💻 Projeto

O Authentication-microservice é um microsserviço que espelha um CRUD de usuários com a autenticação JWT, e que estar pronto para rodar em ambiente isolado utilizando docker e docker compose.

## 🚀 Como executar

- Clone o repositório
- Rode yarn para baixar as dependências
- Rode yarn prisma:dev para iniciar a parte de migrations do banco de dados
- Rode yarn prisma:seed para popular de forma inicial o banco de dados
- Rode yarn build para buildar o projeto para javascript
- Rode yarn start para inicar a aplicação
- Por fim, a aplicação estará disponível em http://localhost:3333

## 🚀 Como executar com docker

- Clone o repositório
- docker build -t auth_microservice .
- docker run -d auth_microservice
- Por fim, a aplicação estará disponível em http://localhost:3333

## 🚀 Como executar com docker compose

- Clone o repositório
- docker compose up -d
- Por fim, a aplicação estará disponível em http://localhost:3333

---

Feito com ♥ by Lincoln silva :wave:

- [Instagram](https://www.instagram.com/jotalincoln/)
- [Github](https://github.com/LincolnSA)
- [Portfólio](https://lincolnsa.github.io/portfolio/)
- [devlincolnsilva@gmail.com](mailto:devlincolnsilva@gmail.com?subject=Oi%20lincoln)
