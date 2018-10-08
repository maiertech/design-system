FROM node:8

# Make NOW environment variable available to build.
ARG NOW
ENV NOW ${NOW}

# Make NOW_TOKEN environment variable available to build.
ARG NOW_TOKEN
ENV NOW_TOKEN ${NOW_TOKEN}

# Set working directory.
WORKDIR /components

# Install Puppeteer dependencies for screenshot testing:
# https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
RUN apt-get update \
    && apt-get install -y \
    gconf-service \
    libasound2 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    libappindicator1 \
    libnss3 \
    lsb-release \
    xdg-utils \
    wget

# Install dependencies.
COPY package.json yarn.lock ./
RUN yarn

# Copy files whitelisted in .dockerignore.
COPY . .

# Install now-cli globally.
RUN npm install -g --unsafe-perm now 

# Build Storybook and run tests.
RUN yarn test

# Copy ./public to /public
RUN mv ./storybook-static /public