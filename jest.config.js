module.exports = { // exports the babelOptions variable
  transform: { // transform is a variable that contains the babel-jest package
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`, // this is the path to the jest-preprocess.js file
  },
  moduleNameMapper: { // moduleNameMapper is a variable that contains the identity-obj-proxy package
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`, // this is the path to the identity-obj-proxy package
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`, // this is the path to the file-mock.js file
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`], // testPathIgnorePatterns is a variable that contains the node_modules, .cache, and public folders
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`], // transformIgnorePatterns is a variable that contains the node_modules folder
  globals: { // globals is a variable that contains the __PATH_PREFIX__ variable
    __PATH_PREFIX__: ``, // this is the path to the __PATH_PREFIX__ variable
  },
  testURL: `http://localhost`, // testURL is a variable that contains the http://localhost URL
  setupFiles: [`<rootDir>/loadershim.js`], // setupFiles is a variable that contains the loadershim.js file
  collectCoverage: true, // collectCoverage is a variable that contains the true boolean
  collectCoverageFrom: [ // collectCoverageFrom is a variable that contains the following files
    "**/*.{js,jsx}", // .js and .jsx files
    "!**/node_modules/**", // ignore the node_modules folder
    "!**/public/**", // ignore the public folder
    "!**/.cache/**", // ignore the .cache folder
    "!**/vendor/**", // ignore the vendor folder
  ],
}
