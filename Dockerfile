FROM node:16 as BUILD_IMAGE
# WORKDIR is not recommend IF used with Github Actions
WORKDIR /app
EXPOSE 443
COPY package.json ./
RUN npm install --unsafe-perm --quiet
COPY . ./
EXPOSE 80
EXPOSE 443
RUN npm run build --quiet
