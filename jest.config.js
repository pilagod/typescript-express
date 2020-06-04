module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "\\.ts$": "ts-jest"
  },
  "testRegex": "\\.(test|spec)\\.ts$",
  "moduleFileExtensions": [
    "ts",
    "js",
    "json",
    "node"
  ],
  'moduleNameMapper': {
    '^@health$': '<rootDir>/src/health',
  },
}