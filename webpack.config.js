const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    path: `${__dirname}/dist`,
    filename: "index.js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  target: ["web", "es5"],

  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    })
  ],

  devServer: {
    contentBase: `${__dirname}/dist`,
    port: 9000,
  }
};
