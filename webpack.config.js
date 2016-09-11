module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "build/bundle.js"
  },
  debug: true,
  devtool: "source-map",
  module: {
    loaders: [
      /**
       * http://www.jbrantly.com/typescript-and-webpack/
       */
      { 
        test: /\.ts$/, 
        loader: 'ts-loader' 
      }
    ]
  }
  //watch: true
}