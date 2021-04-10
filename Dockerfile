FROM node

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8085

RUN npx prettier --write *.*
RUN npm run test
#RUN npm run build

CMD [ "npm", "run", "serve"]
