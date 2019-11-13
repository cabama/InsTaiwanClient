FROM node:latest

RUN mkdir -p /usr/src/instaiwan
RUN useradd -d /usr/src/instaiwan -m -s /bin/bash tester && echo "tester:tester" | chpasswd && adduser tester sudo

# Install Typescript
RUN npm install -g tsc
RUN npm install -g concurrently
RUN npm install typescript -g

# start working in the "tester" home directory
WORKDIR /usr/src/instaiwan
# Make the files owned by tester
RUN chown -R tester:tester /usr/src/instaiwan
# Switch to your new user in the docker image
USER tester

# Create app directory
RUN mkdir -p /usr/src/instaiwan/public
RUN mkdir -p /usr/src/instaiwan/build
RUN mkdir -p /usr/src/instaiwan/src

# COPY PROJECT SETTINGS
ADD package.json /usr/src/instaiwan
ADD package-lock.json /usr/src/instaiwan
ADD tsconfig.json /usr/src/instaiwan
ADD src /usr/src/instaiwan/src
ADD public /usr/src/instaiwan/public

# FINALLY INSTALL PROYECT DEPS
RUN npm install