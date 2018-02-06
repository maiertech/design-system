const pkg = require("./package.json");

module.exports = {
  components: "src/components/**/[A-Z]*.{js,jsx}",
  title: pkg.description
};
