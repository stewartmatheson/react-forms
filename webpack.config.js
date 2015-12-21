module.exports = {

    context: __dirname + "/app",
    entry: "./index.cjsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },

    resolve: {
      extensions: ["", ".jsx", ".cjsx", ".coffee", ".js"],
      modulesDirectories: ["js", "node_modules"]
    },

    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader?insertPragma=React.DOM" },
            { test: /\.cjsx$/, loaders: ["coffee", "cjsx"] },
            { test: /\.coffee$/, loader: "coffee-loader" },
            { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
}
