FROM node:20-buster AS build

WORKDIR /app

ARG VITE_BACKEND_URL=https://api.voicevocab.store

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir /etc/voicevocab
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
