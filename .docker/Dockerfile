FROM node:latest
ARG PORT=3009

WORKDIR /var/www/app
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./ .


CMD ["npm", "start"]
EXPOSE $PORT
