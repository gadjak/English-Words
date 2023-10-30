# FROM node:18-alpine
# WORKDIR /app
# COPY . .
# EXPOSE 3000
# CMD npm install && npm start
FROM nginx:alpine

COPY build/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf
