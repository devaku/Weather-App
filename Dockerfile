FROM node:17-alpine

WORKDIR /app

# Copy to the root of the working directory 
# Which we specified as the /app folder
COPY package.json .

# Install the packages from package.json
RUN npm install

# Copy everything that is in the same place
# as the DockerFile to where the working directory is
COPY . .

# Expose port to access the application
EXPOSE 8080

# Build the application
CMD ["npm", "run", "build"]

# Run the application 
# CMD ["npm", "run", "dev-vite"]