const path = require('path'); 
// webpack内部有一个事件流

module.exports = {
    entry: './src/index.js', // 入口
    output: { // 输出
        path: path.join(__dirname, 'dist'), // 输出的文件夹，只能是绝对路径 
        filename: 'bundle.js' // 打包后的文件名
    },
    module: { // 模块--一切解释模块

    },
    piugins:  [ // 插件

    ],
    devSever: { // 开擦服务器

    }
}