FROM node:10

# Make NOW environment variable available to build.
ARG NOW
ENV NOW ${NOW}

# Make NOW_TOKEN environment variable available to build.
ARG NOW_TOKEN
ENV NOW_TOKEN ${NOW_TOKEN}

# Set working directory.
WORKDIR /components

# Install Puppeteer dependencies for screenshot testing:
# https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker

# See https://crbug.com/795759
RUN apt-get update && apt-get install -yq libgconf-2-4

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN apt-get update && apt-get install -y wget --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge --auto-remove -y curl \
    && rm -rf /src/*.deb

# Install dependencies.
COPY package.json yarn.lock ./
RUN yarn

# Copy files whitelisted in .dockerignore.
COPY . .

# Install now-cli globally.
RUN npm install -g --unsafe-perm now 

# Build Storybook.
RUN yarn run build-storybook

# Run visual regression tests to generate updated screenshots.
RUN UPDATE_SCREENSHOTS=true yarn test -u

# Remove updated screenshots after they have been published.
RUN find ./test -type d -name __image_snapshots__ -prune -exec rm -r "{}" \;

# Run visual regression tests again to determine diffs.
# If there are diffs, build exits with error.
RUN yarn test

# Copy Storybook build to /public from where Zeit Now v1 makes static deployment.
RUN mv ./storybook-static /public