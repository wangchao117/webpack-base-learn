const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack内部有一个事件流

module.exports = {
    // entry: './src/index.js', // 入口
    entry: ['./src/index.js', './src/base.js'], // 多入口
    output: { // 输出
        path: path.join(__dirname, 'dist'), // 输出的文件夹，只能是绝对路径 
        // filename: 'bundle.js' // 打包后的文件名
        // name是entry名字，默认是main，hash根据打包后的文件内容计算出来的一个hash值，：8是取8位
        filename: '[name].[hash:8].js'
    },
    module: { // 模块--一切解释模块
        // 规则
        rules: [
            {
                test: /\.css$/, // 转换文件的配置规则，以css结尾就走这个
                // css-loader用来解析处理css文件中的URL处理路径，要把一个css文件变成一个模块
                // style-loader可把css文件变成style标签插入header中
                // 多个loader是有顺序的，从右往左写，因为转化的时候是葱油往左转换
                loader: ['css-loader', 'style-loader'] // 两个一个不能少
            },
        ]
    },
    piugins:  [ // 插件
        // 此插件能自动产出html文件
        new HtmlWebpackPlugin({
            template: './src/index.html', // 直接产出的模版
            filename: 'index.html',
            title: '欢迎使用插件'
        })
    ],
    devSever: { // 配置京台文件服务器，可以用来预览打包后的项目
        contentBase: './dist',
        host: 'localhost',
        port: '8080',
        compress: true, // 服务器返回给浏览器的时候是否启动gzip压缩
    }
}