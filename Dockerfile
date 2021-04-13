FROM node

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8085

RUN npm run format
RUN npm run test
#RUN npm run build

CMD [ "npm", "run", "serve"]
