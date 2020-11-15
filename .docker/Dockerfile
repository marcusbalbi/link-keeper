FROM node:latest

WORKDIR /var/www/app
# If you are building your code for production
COPY ./package*.json ./

RUN npm ci
# Bundle app source
COPY ./ .


CMD ["npm", "start"]
EXPOSE 3009
