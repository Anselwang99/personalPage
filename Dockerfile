FROM node:18-slim

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variable for Cloud Run deployment
ENV VITE_DEPLOYMENT=cloud-run

# Build the application with root base path for Cloud Run
# Pass the environment variable explicitly to the build process
RUN VITE_DEPLOYMENT=cloud-run npm run build

# Expose port 8080
EXPOSE 8080

# Run the server
CMD ["node", "server.js"]
