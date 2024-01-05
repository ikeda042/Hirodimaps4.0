FROM node:lts-alpine AS build-step

WORKDIR /usr/src/app

COPY frontend/package.json ./
RUN npm install --production

COPY frontend/ ./

RUN npm run build

FROM 242781479181.dkr.ecr.ap-northeast-1.amazonaws.com/nginx-spa:latest

COPY --from=build-step /usr/src/app/build/ /usr/share/nginx/html
