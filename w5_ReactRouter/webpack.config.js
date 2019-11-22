const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry:'./src/main.js',
    devServer:{
        contentBase:path.join(__dirname,'./public'),
        port:8000
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
<<<<<<< HEAD
                    //         ['@babel/proposal-decorators',{legacy: true}],
                    //         ['@babel/proposal-class-properties',{loose: true}],
                                // ["import",{
                                //     "libraryName": "antd",
                                //     "libraryDirectory": "es",
                                //     "style": "css" // `style: true` 会加载 less 文件
                                // }]
=======
                    //         ['@babel/plugin-proposal-decorators',{legacy: true}],
                    //         ['@babel/plugin-proposal-class-properties',{loose: true}],
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
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