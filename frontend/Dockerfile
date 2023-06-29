#Use NodeJS 20 :3
FROM node:20
#Set a working directory
WORKDIR /app
#Install npm 9.6.6
RUN npm install -g npm@9.6.6
#Get package json
COPY package*.json ./
#Install Dependencies
RUN npm install

#Copy the Source code
COPY . ./

#Build the application
RUN npm run build

# Install 'serve' to serve the application
RUN npm install -g serve

# Expose the port that 'serve' will run on
EXPOSE 5000

# Serve the application
CMD ["serve", "-s", "dist", "-l", "5000"]