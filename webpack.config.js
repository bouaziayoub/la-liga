const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.json$/,  // Esta regla aplicará a los archivos JSON
                loader: 'json-loader'  // Utiliza el loader json-loader para cargar los archivos JSON
              }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    }
}