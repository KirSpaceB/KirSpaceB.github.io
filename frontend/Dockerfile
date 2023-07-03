#Use NodeJS 20 :3
FROM node:20.2.0
#Set a working directory
WORKDIR /app
#Install npm 9.6.6
RUN npm install -g npm@9.6.6
#Get package json // For some reason this has to be /frontend because its relative path to the root directory while everything else is relative path to the built docker directory
COPY /frontend/package*.json ./
#Install Dependencies
RUN npm install

#Copy the Source code
COPY . /app

#Build the application
RUN npm run build
