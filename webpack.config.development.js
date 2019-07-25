const path = require('path');

module.exports = [
{
    mode: 'development',
    devtool: 'source-map',
    entry: './src/timeline.js',
    output: {
        filename: 'jquery.timeline.js',
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
}
]