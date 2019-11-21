const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry:'./src/main.js',
    devServer:{
        contentBase:path.join(__dirname,'./public'),
        port:8000
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
                    //         ['@babel/plugin-proposal-decorators',{legacy: true}],
                    //         ['@babel/plugin-proposal-class-properties',{loose: true}],
                    //     ]
                    // }
                }],
                include:path.join(__dirname,'./src')
            },

            // css加载器
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                include:path.join(__dirname,'./src')
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