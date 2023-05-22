# Starting point for building our Docker image
FROM node:alpine
# Adds author label to the Docker image
LABEL author="Lee Donald"
# Sets the environment variable NODE_ENV to 'production'
ENV NODE_ENV=production
# Sets the working directory inside the container to '/app'
WORKDIR /app
# Copies package.json and package-lock.json from the local directory into the container
COPY package.json package-lock.json ./
# Executes 'npm install' command during the build process
RUN npm install
# Copies the entire content of the local directory into the container
COPY . ./
# Documents that the container will use port 3000 when running
EXPOSE 3000
# Specifies the main command that will run when the container starts
ENTRYPOINT ["npm", "start"]
