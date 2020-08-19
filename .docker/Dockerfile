FROM node:latest

WORKDIR /var/www/app
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./server .


CMD ["npm", "start"]

EXPOSE 3009
