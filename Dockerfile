FROM node:8.11 as build

ARG API
ARG TOKEN

WORKDIR /usr/src/app/

COPY . .

RUN npm run-script start

FROM nginx:1.15.1

COPY ops/nginx /

COPY --from=build /usr/src/app/build /usr/share/nginx/html/
