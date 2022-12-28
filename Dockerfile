# ==== CONFIGURE =====
FROM node:16-alpine
WORKDIR /app
COPY . .

RUN npm config set legacy-peer-deps true
RUN npm install

RUN npm run build
ENV NODE_ENV production
EXPOSE 3000

CMD [ "npx", "serve", "build" ]