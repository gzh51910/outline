const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry:'./src/main.js',
    devServer:{
        contentBase:path.join(__dirname,'./public'),
        port:8000
    },
    output:{
        publicPath:'./'
    },
    resolve:{
        // 别名
        alias:{
            '@':path.join(__dirname,'./src'),
            '@@':path.join(__dirname,'./src/components'),
            '~':path.join(__dirname,'./src/pages')
        }
    },
    module:{
        rules:[
            // js加载器
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    // options:{
                    //     presets:['@babel/preset-react'],
                    //     plugins:[
                    //         ['@babel/proposal-decorators',{legacy: true}],
                    //         ['@babel/proposal-class-properties',{loose: true}],
                                // ["import",{
                                //     "libraryName": "antd",
                                //     "libraryDirectory": "es",
                                //     "style": "css" // `style: true` 会加载 less 文件
                                // }]
                    //     ]
                    // }
                }],
                include:path.join(__dirname,'./src')
            },

            // css加载器
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                // include:path.join(__dirname,'./src')
            },

            // sass加载器
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
                include:path.join(__dirname,'./src')
            },

            // 图片
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                //小于10k的图片使用base64编码显示
                  limit: 10000,

                  //大于10k的图片以一定的规则存入以下目录
                  //   存放目录基于output的地址
                  name: 'img/[name].[hash:5].[ext]' 
                }
            }
        ]
    },

    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/template.html'
        })
    ]
}