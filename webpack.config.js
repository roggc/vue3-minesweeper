const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')

module.exports={
    entry:'./src/index.js'
    ,module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader"
            },
              {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                'css-loader'
                ]
              }
        ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'src/public/index.html'
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
      }),
      ]
}