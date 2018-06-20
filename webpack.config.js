module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    // 'style-loader',
                    // 'css-loader'
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true
                        },
                    }
                ]
            }, 
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    'svg-react-loader'
                ]
            }
        ]
    },
    devServer: {
        // open: true,
        // openPage: '/public'
        contentBase: './public'
    }
};