const path = require('path/posix');

/** @type {import('webpack').Configuration} */
module.exports ={
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, "dist"),
        name: "[name].[contenthash].js",
        publicPath: ""
    },
    mode:"production",
    module:{
        rules: [
            {
                use: "babel-loader",
                test: /.(js|jsx)$/,
                exclude: /node-modules/
            }
        ]
    }
}