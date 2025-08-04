FROM node:18-slim

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables for Cloud Run deployment
ENV VITE_DEPLOYMENT=cloud-run
ENV VITE_CUSTOM_DOMAIN=true
ENV VITE_USE_SUBPATH=true

# Build the application with /personalPage/ base path for custom domain
RUN VITE_DEPLOYMENT=cloud-run VITE_CUSTOM_DOMAIN=true VITE_USE_SUBPATH=true npm run build

# Expose port 8080
EXPOSE 8080

# Run the server
CMD ["node", "server.js"]
