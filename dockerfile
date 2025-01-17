FROM node:22.13.0-alpine3.21 AS build

WORKDIR /app

COPY package.json package.json 
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npm run build

FROM node:22.13.0-alpine3.21 AS production

COPY --from=build /build/node_modules node_modules/
COPY --from=build /build/package.json package.json
COPY --from=build /build/package-lock.json package-lock.json
COPY --from=build /build/dist/ dist/

CMD ["npm", "start"]

