FROM node:8.9-alpine

RUN mkdir /usr/node

RUN npm install nodemon -g

WORKDIR /usr/node
ADD package.json /usr/node/package.json
RUN npm install

EXPOSE 3000

CMD npm start