FROM  node:18.12.1
WORKDIR /usr/local/api
COPY ./ /usr/local/api

RUN npm install && npm run build

CMD [ "node","dist/main.js" ]

EXPOSE 3000