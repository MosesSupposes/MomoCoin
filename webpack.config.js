const Web3 = require('web3')
const path = require('path')
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: {
        app: './client/src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: "bundle.js",
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test:/\js$/, 
                exclude: /node_moudeles/, 
                loader: "babel-loader",
                query: {
                    presets: ['latest', 'react']
                }
            },
            {
                test: /\.json$/, 
                exclude: /node_modules/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.sol/, 
                loader: "truffle-solidity-loader"
            }
        ]
    },
    devServer: {
        contentBase: './client/dist',
        inline: true,
        hot: true
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        })
    ]
};