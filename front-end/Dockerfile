FROM  node:18.12.1 as builder
WORKDIR /usr/local/api
COPY ./ /usr/local/api

RUN npm install && npm run build

FROM nginx
COPY --from=builder /usr/local/api/dist/front-end /usr/share/nginx/html
EXPOSE 80