FROM node:13.10.1

WORKDIR /app

COPY . /app

RUN npm i

RUN npm run build

ENTRYPOINT npm run start