const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            // this property is passed to stop it from injecting
            // the bundle.js script twice.
            inject: false,
            filename: "./index.html"
         })
       ],
   module: {
     rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
        },
        {
          test: /\.(txt|md)$/i,
          use: 'raw-loader',
        }
      //   {
      //     test: /\.md$/,
      //     use: [
      //       {
      //         loader: 'html-loader'
      //       },
      //         {
      //             loader: "markdown-loader",
      //             options: {
      //               headerPrefix: 'pabs-header-',
      //               highlight: function(code) {
      //                 return require('highlight.js').highlightAuto(code).value;
      //               },
      //             }
      //         }
      //     ]
      // }
     ]
   }
};