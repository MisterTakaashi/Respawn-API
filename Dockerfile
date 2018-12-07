FROM node:8.9-alpine

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
ADD package.json /src/package.json
RUN npm install

EXPOSE 3000

CMD npm start