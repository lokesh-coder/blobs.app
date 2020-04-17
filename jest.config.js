module.exports = {
  moduleDirectories: [
    'node_modules',
    __dirname
  ],
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/assetsMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "^uielements(.*)$": "<rootDir>/src/uielements$1"
  },
  testEnvironment: "jsdom",
};
