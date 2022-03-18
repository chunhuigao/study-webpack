
const path = require('path')
module.exports = {
    entry:{
        index:path.join(__dirname,'../src/index.js')
    },
    output:{
        filename:'[name].[hash:4].js',
        path:path.join(__dirname,'../dist')
    }
}