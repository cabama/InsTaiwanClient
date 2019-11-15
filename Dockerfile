FROM node:latest

# Install Typescript
RUN npm install -g tsc
RUN npm install -g concurrently
RUN npm install typescript -g

# start working in the "tester" home directory
RUN useradd -m -d /usr/src/instaiwan tester
RUN mkdir -p /usr/src/instaiwan/public
WORKDIR /usr/src/instaiwan

RUN chown tester /usr/src/instaiwan/build

# Switch to your new user in the docker image
USER tester

# Create app directory
RUN mkdir -p /usr/src/instaiwan/src
RUN mkdir -p /usr/src/instaiwan/build

# COPY PROJECT SETTINGS
ADD package.json /usr/src/instaiwan
ADD package-lock.json /usr/src/instaiwan
ADD tsconfig.json /usr/src/instaiwan
ADD src /usr/src/instaiwan/src
ADD public /usr/src/instaiwan/public

# FINALLY INSTALL PROYECT DEPS
RUN npm install