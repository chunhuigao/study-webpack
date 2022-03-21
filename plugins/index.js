const Purgecss = require("purgecss")
class MyWebpackPlugin {
  constructor(options) {
    const purge = new Purgecss(options)
    console.log("purgecss", Purgecss)
  }
  apply(compiler) {
    compiler.hooks.compilation.tap("done", (compilation) => {
      console.log("compilation", compilation)
    })
  }
}

module.exports = MyWebpackPlugin
