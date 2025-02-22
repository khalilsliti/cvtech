FROM node:12
WORKDIR /App
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@10.2.0
COPY . .
EXPOSE 4200
CMD ng serve --host 0.0.0.0
