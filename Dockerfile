FROM node:18
WORKDIR /usr/src/flwdl
COPY package*.json /usr/src/flwdl

RUN npm install
COPY . /usr/src/flwdl
RUN npm run build
CMD ["npm","run","start"]
