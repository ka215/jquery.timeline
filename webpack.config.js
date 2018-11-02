module.exports = {
    mode: 'development',
    entry: './src/timeline.js',
    devtool: 'source-map',
    output: {
        path: `${__dirname}/docs/js/`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /^timeline\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            }
        ]
    }
}
