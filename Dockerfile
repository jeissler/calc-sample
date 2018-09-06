FROM mhart/alpine-node
WORKDIR /usr/src
COPY package-lock.json package.json ./
RUN npm i
COPY . .
RUN npm run-script build && mv build /public