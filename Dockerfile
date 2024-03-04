# Use an official Node.js runtime as a base image
FROM node:14-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build -- --prod

# Use Nginx as a lightweight server to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/prudpro /usr/share/nginx/html

# Expose port 80
EXPOSE 80
