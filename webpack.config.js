// const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            ["@babel/plugin-proposal-decorators", {"legacy":true}],
                            ["@babel/plugin-proposal-class-properties", {"loose":true}]
                        ]
                    }
                }
            },
            {
                test: /^((?!\.module).)*css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.module\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]__[sha1:hash:hex:16]'
                            }
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
    ],
    resolve: {
        alias: {
            '~src' : path.resolve(__dirname, './src')
        }
    },
    devServer: {
        historyApiFallback: true
    }
}

module.exports = config