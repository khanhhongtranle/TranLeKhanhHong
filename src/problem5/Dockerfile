FROM node:16.20.2-slim
RUN apt-get update && apt-get install -y openssl libssl-dev
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
