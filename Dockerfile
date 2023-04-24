FROM node:18.13-alpine AS base

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm ci

COPY List.js routes.js server.js /app/

ENV PORT 8000
CMD node server

