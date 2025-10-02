# Use official Node.js runtime as a parent image
from node:18-alpine

# Set working directory inside the container
workdir /app

# Install app dependencies
copy package*.json ./

# Install only production dependencies
run npm ci --only=production

# Copy the rest of the application code
copy . .

#Create non-root user for better security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S -u 1001 -G nodejs nodejs

# Change ownership of the app directory to the non-root user
run chown -R nodejs:nodejs /app

# Switch to the non-root user
user nodejs

# Expose the port the app runs on (this is only for documentation purposes)
expose 3000

# Add a health check to ensure the server is running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:5000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["npm", "start"]
