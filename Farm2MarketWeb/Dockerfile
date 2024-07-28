#working
FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN npm run ng build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/farm2-market-web/browser .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]