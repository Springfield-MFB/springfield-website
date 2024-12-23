# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Install Yarn globally
RUN npm install -g yarn

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the default Next.js development port
EXPOSE 3000

# Define the command to run the Next.js development server
CMD ["yarn", "dev"]