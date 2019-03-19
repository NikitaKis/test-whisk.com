module.exports = {
  setupFiles: ["<rootDir>__tests__/setup/setupEnzyme.tsx", "<rootDir>__tests__/setup/testShim.js"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/setup/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|jpg|png|svg)$": "<rootDir>/node_modules/jest-css-modules"
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  verbose: true
};
