const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:'./src/main.ts',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        port:81,
        hot:true,
        host:'0.0.0.0',
        contentBase:'./src',
        inline:true
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        //new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html'
        })
    ],
    resolve:{
        extensions:['.ts','.js','.tsx'],
        alias:{
            '@':path.join(__dirname,'./src')
        }
    }
}