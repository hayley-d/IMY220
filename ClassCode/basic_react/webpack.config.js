const path = require("path");

module.exports = {
    
    entry: "./src/index.js",
    output: {
        path: path.resolve("public"),
        filename: "bundle.js",
        publicPath: '/'
    },
    mode: "development",
    module: {
        rules: [
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader', 'postcss-loader'],
                    },
                    {
                        test:/\.(png|jpg|gif)$/,
                        use:[{loader: 'file-loader',options:{name:'[name].[ext]',outputPath:'assets/images/'}}]
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: { loader: "babel-loader",options: {presets:["@babel/preset-env"]} }
                    }
              ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        historyApiFallback: true, 
        port: 3000,
        publicPath: '/'
    }
}
