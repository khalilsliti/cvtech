FROM node:12
WORKDIR /App
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm","start"]
