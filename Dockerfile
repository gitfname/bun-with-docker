# Use official Bun image as base
FROM oven/bun:1.1.13-slim as base

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package.json bun.lockb ./

# Install dependencies (excluding devDependencies)
RUN bun install --production

# Copy application files
COPY . .

# Build step (uncomment if you have a build script)
# RUN bun run build

# Expose the port your Hono app uses (default is 3000)
EXPOSE 3000

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Run the application
CMD ["bun", "run", "src/index.ts"]