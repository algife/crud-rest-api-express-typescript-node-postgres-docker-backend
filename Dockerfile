FROM node:16 as BUILD_IMAGE
# WORKDIR is not recommend IF used with Github Actions
WORKDIR /app
COPY package.json ./
RUN npm install --quiet
COPY . ./
RUN npm run build --quiet
