module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            {pattern: './src/specs.ts', watched: false}
        ],
        preprocessors: {
            './src/specs.ts': ['webpack']
        },
        webpack: {
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
            }
        },
        webpackMiddleware: {
            stats: 'errors-only'
        },
        mime: { 'text/x-typescript': ['ts','tsx'] },
        browsers: ['PhantomJS']
    });
};
