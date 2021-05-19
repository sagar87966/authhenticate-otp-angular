module.exports = {
  preset: "jest-preset-angular",
  roots: ["<rootDir>/src/"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  transform: {
    "^.+\\.(ts|html)$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(@ionic-native|ionic-native)/)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", ".html"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/cypress/",
    "<rootDir>/src/test.ts",
  ],
};
