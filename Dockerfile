FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/instaiwan
RUN mkdir -p /usr/src/instaiwan/public
RUN mkdir -p /usr/src/instaiwan/src

WORKDIR /usr/src/instaiwan

# Install Typescript
RUN npm install -g tsc
RUN npm install -g concurrently
RUN npm install typescript -g

# COPY PROJECT SETTINGS
ADD package.json /usr/src/instaiwan
ADD package-lock.json /usr/src/instaiwan
ADD tsconfig.json /usr/src/instaiwan
ADD src /usr/src/instaiwan/src
ADD public /usr/src/instaiwan/public

# FINALLY INSTALL PROYECT DEPS
RUN npm install