FROM node:14
LABEL Name=node-hana Version=1.0
COPY package.json /tmp/package.json
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install
EXPOSE 4000
CMD ["node", "index.js"]