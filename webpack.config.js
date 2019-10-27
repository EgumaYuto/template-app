const path = require('path');

module.exports = {
    entry: './src/static/index.js',
    output: {
        path: path.resolve(__dirname, 'src/static'),
        filename: 'main.js'
    },
    devtool: 'inline',
    module: {
        rules: [
            {
                test: /\.riot$/,
                exclude: /node_modules/,
                use: [{
                    loader: '@riotjs/webpack-loader',
                    options: {
                        hot: true
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: './src/static'
    }
};