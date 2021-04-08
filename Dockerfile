FROM node

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8085

CMD [ "npm", "run", "serve"]