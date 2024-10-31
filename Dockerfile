# Use a more recent Node.js version
FROM node:18

WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files to the container
COPY . .

# Generate the Prisma client and build the TypeScript code
RUN npx prisma generate
RUN npm run build

# Expose port and run the app
EXPOSE 3000
CMD ["npm", "start"]
