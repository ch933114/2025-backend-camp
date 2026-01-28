############################
# dev（開發用，支援 HMR）
############################
FROM node:24-alpine3.22 AS dev

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

############################
# build（打包用）
############################
FROM node:24-alpine3.22 AS build

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

############################
# production（正式環境）
############################
FROM node:24-alpine3.22 AS production

ENV NODE_ENV=production
WORKDIR /usr/share/webapps/app

COPY --from=build /app/dist .

RUN npm install -g serve

EXPOSE 80
CMD ["serve", "-s", ".", "-l", "80"]
