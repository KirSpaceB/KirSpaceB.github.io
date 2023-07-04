# Use NodeJS 20 :3
FROM node:20.2.0
# Set a working directory
WORKDIR /app
# Install npm 9.6.6
RUN npm install -g npm@9.6.6
# Get package json
COPY ./frontend/package*.json ./frontend/
# Install Dependencies
WORKDIR /app/frontend
RUN npm install
# Copy the Source code
COPY ./frontend ./
# Build the application
RUN npm run deploy