const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
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
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['*', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ttf|woff2)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(txt|md)$/i,
                use: 'raw-loader',
            }
        ]
    }
};