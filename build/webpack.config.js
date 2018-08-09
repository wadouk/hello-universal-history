const path = require('path')

module.exports = {
    entry: path.join(process.cwd(), 'src/browser.js'),
    devtool: 'source-map',
    watch: true,
    mode: 'development'
};