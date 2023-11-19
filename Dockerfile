FROM node:16
WORKDIR /usr/src/indakwa-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3005
CMD [ "node", "app.js" ]