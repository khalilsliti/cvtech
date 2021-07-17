FROM node:12
WORKDIR /App
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["ng","serve","--host", "0.0.0.0"]
