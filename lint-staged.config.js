module.exports = {
  '*.js': ['eslint --fix'],
  '*.md': ['prettier --write', 'prettier --check'],
};
