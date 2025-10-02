# Simple single-stage build for development
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files 
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy source code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Add a simple health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:5173/ || exit 1

# Start Vite development server
CMD ["npm", "run", "dev"]