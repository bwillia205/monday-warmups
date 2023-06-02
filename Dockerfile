FROM node:18.13-alpine AS base

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY dist/ ./

ENV PORT 8000
CMD node server

