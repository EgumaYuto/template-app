const path = require('path');

module.exports = {
    mode: 'development',
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
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.riot']
    },
    devServer: {
        contentBase: './src/static'
    }
};