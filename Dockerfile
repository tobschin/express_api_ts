
FROM node:16 AS installer
WORKDIR /srv/app
COPY package*.json ./

FROM installer AS builder
RUN npm install
COPY . .
RUN npm run build

FROM builder AS runner
EXPOSE 3000
CMD ["node", "build/index.js"]
