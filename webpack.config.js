module.exports = {
    entry: {
        'jquery.timeline.min.js': './src/timeline.js'
    },
    output: {
        filename: '[name]',
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