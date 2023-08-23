FROM node
WORKDIR /app

COPY package.json ./
RUN npm i

COPY . .
RUN npx prisma generate

CMD npx prisma migrate deploy && npm start