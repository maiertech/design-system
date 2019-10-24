const clipboard = require('clipboardy');

module.exports = async () => {
  process.env.DEPLOYMENT_URL = await clipboard.read();
};
