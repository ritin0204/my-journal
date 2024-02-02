# syntax=docker/dockerfile:1
# Node Js base Image
FROM node:20-alpine3.18

# Setting Up working directory
WORKDIR /app

# Copying package json
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
