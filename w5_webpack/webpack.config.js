// webpack.config.js是一个commonJS规范的模块文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry:'./src/main.js',

    // 测试服务器
    devServer:{
        // 设置服务器根目录
        contentBase:'./src'
    },

    // 加载器
    module:{
        // 加载器列表，需要编译什么文件就添加一个加载器即可
        rules:[
            {
                // 用于匹配文件
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                }]
            }
        ]
    },

    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            // 以index.html作为模板创建html文件
            template:'./public/template.html'
        })
    ]
}