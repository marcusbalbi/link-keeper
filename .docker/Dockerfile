FROM node:latest

WORKDIR /var/www/app

COPY ./server/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./server .


CMD ["npm", "start"]
