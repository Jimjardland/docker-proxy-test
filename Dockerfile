FROM node:latest

RUN mkdir -p /www
WORKDIR /www

COPY package.json /www/
RUN npm install

COPY . /www

ENV PORT 9000
EXPOSE 9000

CMD ["npm", "start"]