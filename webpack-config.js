const path = require('path'); 
// webpack内部有一个事件流

module.exports = {
    entry: './src/index.js', // 入口
    output: { // 输出
        path: path.join(__dirname, 'dist'), // 输出的文件夹，只能是绝对路径 
        filename: 'bundle.js' // 打包后的文件名
    },
    module: { // 模块--一切解释模块
        // 规则
        rules: [
            {
                test: /\.css$/, // 转换文件的配置规则，以css结尾就走这个
                // css-loader用来解析处理css文件中的URL处理路径，要把一个css文件变成一个模块
                // style-loader可把css文件变成style标签插入header中
                // 多个loader是有顺序的，从右往左写，因为转化的时候是葱油往左转换
                loader: ['style-loader', 'css-loader'] // 两个一个不能少
            },
        ]
    },
    piugins:  [ // 插件

    ],
    devSever: { // 开擦服务器

    }
}