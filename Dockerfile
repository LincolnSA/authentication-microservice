FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn 

RUN yarn build

RUN yarn prisma:dev

RUN yarn prisma:seed

EXPOSE 3333

CMD yarn start

