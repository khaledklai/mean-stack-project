# Stage 1
FROM node:14.16.1-alpine3.13 as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i npm@latest -g

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.19.10-alpine

COPY --from=node /usr/src/app/dist/mean-stack-project /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
