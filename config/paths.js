const path = require("path");

const paths = {
  entry: path.resolve(__dirname, "../index"),
  output: path.resolve(__dirname, "../build"),
  assets: path.resolve(__dirname, "../src/assets"),
  template: path.resolve(__dirname, "./template.html"),
  components: path.resolve(__dirname, "../src/components"),
};

module.exports = paths;
