FROM node:20-alpine

#set the directory
WORKDIR /app

#copy package.json
COPY package*.json ./

#Install project dependencies
RUN npm install 

#copy rest code
COPY . .

#PORT
EXPOSE 3000

#RUN
CMD ["npm", "start"]
