# ---------- Stage 1: Build ----------
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- Stage 2: Serve ----------
FROM nginx:alpine

# default nginx config delete
RUN rm /etc/nginx/conf.d/default.conf

# custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# react build copy
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
