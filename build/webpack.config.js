const path = require('path')

module.exports = {
    entry: path.join(process.cwd(), 'src/browser.js'),
    devtool: 'cheap-module-source-map',
    watch: true,
    mode: 'development',
    module: {
        rules: [{
            test: /\.twig$/,
            use: ['twig-loader']
        }]
    },
    node: {
        fs: 'empty' // for twig-loader
    }
};