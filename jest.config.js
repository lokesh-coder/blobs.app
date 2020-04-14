module.exports = {
  moduleDirectories: [
    'node_modules',
    __dirname
  ],
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  testEnvironment: "jsdom",
};
