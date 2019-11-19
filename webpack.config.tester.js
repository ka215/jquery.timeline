const path = require('path');

module.exports = [
{
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: [
            './test/dist/jqtl-tester.js',
            './test/dist/jqtl-tester.scss'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'test/dist'),
        publicPath: '/'
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
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            AutoPrefixer({ browsers: ['last 2 version', 'Android >= 4'] })
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff2?|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: [
                    {
                        loader: 'url-loader?limit=100000&name=img/[name].[ext]'
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
            new UglifyJsPlugin()
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'test/img/'),
                to: path.resolve(__dirname, 'test/dist/img/')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: 'test/dist/style.css'
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '95-100'
            }
        })
    ]
}
]
