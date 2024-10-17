const path = require("path");

module.exports = {
    
    entry: "./frontend/src/index.tsx",
    output: {
        path: path.resolve("frontend","public"),
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve: {
        extensions:['.ts','.tsx','.js','.jsx']
    },
    mode: "development",
    module: {
        rules: [
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },
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
        contentBase: path.resolve(__dirname, 'frontend', 'public'),
        hot: true,
        historyApiFallback: true,
        port: 3001,
        publicPath: '/',
        hot:true
    }
}
