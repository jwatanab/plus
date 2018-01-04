module.exports = {
    entry: './cli/script.js',
    output: {
        filename: './pub/bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}