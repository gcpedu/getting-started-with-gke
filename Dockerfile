FROM node:6.9.1

COPY package.json .
COPY server.js .

RUN npm install

ENV PORT 8080

CMD node server.js

EXPOSE 8080
