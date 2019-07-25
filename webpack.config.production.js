const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'jquery.timeline': './src/timeline.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    }
};