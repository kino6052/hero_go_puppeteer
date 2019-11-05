const TestList = require('./test-list');

const getRoots = () => TestList.map(k => `<rootDir>/src/specs/${k}`)

console.warn(getRoots());

module.exports = {
  roots: getRoots(),
  modulePaths: ["src"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec|steps))\\.tsx?$"
};