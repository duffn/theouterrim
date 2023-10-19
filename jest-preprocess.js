const babelOptions = { // babelOptions is a variable that contains the babel-preset-gatsby package
  presets: ["babel-preset-gatsby"],
}

module.exports = require("babel-jest").default.createTransformer(babelOptions) // exports the babelOptions variable
