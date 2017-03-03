var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.component.ts$/, loader: 'ts-loader!angular2-template-loader'},
            {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.scss/, loader: 'raw-loader!sass-loader'}
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.html', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENV || 'development')
            }
        })
    ]
};
