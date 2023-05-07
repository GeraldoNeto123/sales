FROM node:20-alpine

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./
COPY . .

RUN yarn install


EXPOSE 3000

# CMD ["yarn", "dev"]