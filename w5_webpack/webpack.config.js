// webpack.config.js是一个commonJS规范的模块文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode:'production',
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
            // js加载器(babel-loader)
            {
                // 用于匹配文件
                test:/\.js$/,
                include:'./src',
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy: true}],
                            ['@babel/plugin-proposal-class-properties',{ loose: true }],
                        ]
                    }
                }]
            },

            // css加载器（css-loader,style-loader）
            {
                test:/\.css$/,
                include:'./src',
                use:['style-loader','css-loader']
            },

            // sass加载器（sass-loader）
            {
                test:/\.scss$/,
                exclude:'./node_modules',
                use:['style-loader','css-loader','sass-loader']
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