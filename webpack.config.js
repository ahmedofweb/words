const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    //mode
    mode: "development", //production
    //entry
    entry:{
        app:path.resolve(__dirname, './src/js/app.js')
    },
    //output
    output:{
        path:path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //plugins
     plugins:[
         new HtmlWebpackPlugin({
            //title
            title: "webpack",
            //filename
            filename: "index.html",
            //template
            template: "./src/temp.html",
            //chunks
            chunks: ['app'],
         })
     ],
    //loader
    module:{
        rules:[
            {
                //test
                test: /\.css$/i,
                //use
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    //devServer
   devServer:{
      static:{
        directory: path.resolve(__dirname, 'public')
      },
      port: 2010,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
   }
}